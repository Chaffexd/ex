import Image from "next/image";
import Link from "next/link";
import React from "react";

const ProductCard = ({ productInfo }) => {
  console.log("ProductCard", productInfo);
  return (
    <Link
      key={productInfo.sys.id}
      href={`/menu/${productInfo.fields.beverageName
        .toLowerCase()
        .replace(/\s+/g, "-")}`}
        className="rounded-b-xl bg-slate-100"
    >
      <div className={`w-[480px] rounded-xl overflow-hidden min-h-[500px]`}>
        <Image
          height={500}
          width={500}
          alt={productInfo?.fields?.asset?.description || "Product Image"}
          src={`https:${productInfo?.fields?.asset?.fields?.file?.url}`}
          className="rounded-t-xl"
        />
        <div className="p-4 flex items-center justify-center h-full mb-4">
          <div className="flex items-center justify-center">
            <h3 className={`text-2xl font-bold `}>
              {productInfo?.fields?.beverageName}
            </h3>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;
