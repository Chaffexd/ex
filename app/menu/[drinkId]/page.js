import { getEntry } from "@/lib/contentful";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const DrinkPage = async ({ params }) => {
  const { drinkId } = await params;
  const entry = await getEntry(drinkId, "productPage");
  const productData = entry.items[0];

  const nutrition =
    productData?.fields?.product?.fields?.nutritionalInformation?.fields;

    console.log("Product Data:", productData);

  const nutritionItems = nutrition
    ? [
        { label: "Energy", value: nutrition.energy },
        { label: "Fat", value: `${nutrition.fat}g` },
        { label: "Saturated Fat", value: `${nutrition.saturatedFat}g` },
        { label: "Carbohydrates", value: `${nutrition.carbohydrates}g` },
      ]
    : [];

  return (
    <article className="px-6 md:px-12 py-10 max-w-[1080px] mx-auto">
      <Link href={"/menu"} className="mb-4 block">
        Go back to Menu
      </Link>
      <div className="grid md:grid-cols-2 gap-8 items-start">
        <Image
          height={500}
          width={500}
          alt={
            productData?.fields?.product?.fields?.asset?.fields?.description ||
            "Product Image"
          }
          src={`https:${productData?.fields?.product?.fields?.asset?.fields?.file?.url}`}
          className="rounded-xl"
        />

        <div className="bg-slate-100 rounded-xl p-4">
          <div>
            <h1 className="text-2xl font-bold mb-6">
              {productData?.fields?.productName}
            </h1>
            <p className="mb-6 text-slate-500">
              {productData?.fields?.product?.fields?.productDescription}
            </p>
            <h2 className="font-bold text-xl mb-6">Nutrition</h2>
            <div className="flex justify-between border-b-2 border-b-slate-200 pb-2">
              <p>Serving size</p>
              <p>Grande</p>
            </div>
            <ul>
              <li className="flex justify-between py-2">
                <span>16oz</span>
                <span>Per Serving</span>
              </li>
              {nutritionItems.map((item) => (
                <li className="flex justify-between py-2" key={item.label}>
                  <span>{item.label}</span>
                  <span>{item.value}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="border-t-2 border-t-slate-200 pt-2 mt-2">
            <h3 className="font-bold text-xl mb-2 mt-2">Customisations</h3>

            <div className="flex justify-between mb-2">
              <span>Size?</span>
              <span>
                {productData?.fields?.product?.fields?.customisations?.fields?.sizes}
              </span>
            </div>

            {productData?.fields?.product?.fields.customisations.fields
              .cream && (
              <div className="flex justify-between mb-2">
                <span>Whipped Cream?</span>
                <span>
                  {
                    productData?.fields.product.fields.customisations.fields
                      .cream
                  }
                </span>
              </div>
            )}
            {productData?.fields.product.fields.customisations.fields
              .flavours && (
              <div className="flex justify-between mb-2">
                <span>Syrup?</span>
                <span>
                  {
                    productData?.fields.product.fields.customisations.fields
                      .flavours
                  }
                </span>
              </div>
            )}
          </div>
        </div>
      </div>
    </article>
  );
};

export default DrinkPage;
