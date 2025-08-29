import Link from "next/link";
import React from "react";

const Button = ({ ctaText, className = "", href }) => {
  return (
    <Link
      className={`rounded-full flex items-center justify-center font-bold h-[50px] w-[180px] ${className} hover:cursor-pointer`}
      href={`${href}`}
    >
      {ctaText}
    </Link>
  );
};

export default Button;
