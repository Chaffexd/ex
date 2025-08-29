import ProductCard from "@/components/ProductCard";
import { getEntries } from "@/lib/contentful";
import Link from "next/link";
import React from "react";

const MenuPage = async () => {
  const entries = await getEntries("product");
  console.log("Entries =", entries.items);

  const pageData = entries.items;

  return (
    <div className="px-6 md:px-12 py-10 max-w-[1080px] mx-auto">
      <h1 className="text-6xl mb-4 text-center">The Starbucks Coffee Company</h1>
      <Link href={"/"} className="block">Go back to Home</Link>
      <section className="flex flex-wrap gap-4 text-center mt-8">
        {pageData.map((product) => {
          return <ProductCard productInfo={product} key={product} />;
        })}
      </section>
    </div>
  );
};

export default MenuPage;
