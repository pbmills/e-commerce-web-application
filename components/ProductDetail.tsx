"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { useCount } from "../context/CountContext";

interface Item {
  id: number;
  title: string;
  description: string;
  price: number;
  image: string;
  qty: number;
}

export default function ProductDetail({
  id,
  title,
  description,
  price,
  image,
}: Item) {
  const [qty, setQty] = useState<number>(1);

  const decrease = () => {
    if (qty > 1) {
      setQty(qty - 1);
    }
  };

  const increase = () => {
    if (qty < 100) {
      setQty(qty + 1);
    }
  };

  const { addToCart } = useCount();

  return (
    <article className="inner pt-12 pb-24">
      {/* Back Button */}
      <Link href="/" className="flex items-center gap-1 group max-w-max">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="size-6 group-hover:-translate-x-1 transition-transform"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M15.75 19.5 8.25 12l7.5-7.5"
          />
        </svg>
        Go Back
      </Link>
      {/* Title */}
      <h1 className="text-4xl xl:text-6xl mt-8 xl:mt-16">{title}</h1>
      {/* Content */}
      <section className="mt-8 flex flex-col gap-8 lg:flex-row lg:gap-12">
        {/* Left */}
        <div className="w-full aspect-[0.8] rounded-3xl bg-white relative max-w-sm">
          <Image
            src={image}
            alt={title}
            className="w-full object-contain object-center p-8"
            fill
          />
        </div>
        {/* Right */}
        <div className="flex-1">
          <div className="flex justify-between gap-6 items-center">
            {/* Price */}
            <p className="text-4xl font-bold">${price.toFixed(2)}</p>
            {/* Quantity - Max 10 */}
            <div className="flex items-stretch rounded-xl bg-white text-xl divide-x divide-slate-50 overflow-hidden">
              <button
                role="button"
                onClick={decrease}
                className={`p-3 md:p-4 rounded-l-xl ${
                  qty === 1
                    ? "cursor-not-allowed opacity-50"
                    : "hover:bg-slate-100 transition-colors"
                }`}
              >
                <span className="sr-only">Decrease quantity</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="size-6 shrink-0"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M5 12h14"
                  />
                </svg>
              </button>
              <span className="px-3 md:px-5 grid place-items-center w-12 md:w-16">
                {qty}
              </span>
              <button
                role="button"
                onClick={increase}
                className={`p-3 md:p-4 rounded-r-xl ${
                  qty === 10
                    ? "cursor-not-allowed opacity-50"
                    : "hover:bg-slate-100 transition-colors"
                }`}
              >
                <span className="sr-only">Increase quantity</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="size-6 shrink-0"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 4.5v15m7.5-7.5h-15"
                  />
                </svg>
              </button>
            </div>
          </div>
          {/* CTA */}
          <div className="w-full mt-6 flex flex-row gap-4 max-sm:justify-between">
            <button
              onClick={() => addToCart({ id: id, qty: qty })}
              role="button"
              className="py-3 px-6 rounded-full bg-indigo-200 text-indigo-700 font-bold hover:bg-indigo-100 transition-colors"
            >
              Add to cart
            </button>
            <button
              role="button"
              className="py-3 px-6 rounded-full bg-indigo-700 text-white font-bold hover:bg-indigo-600 transition-colors"
            >
              Buy now
            </button>
          </div>
          <div className="mt-8 space-y-2">
            <p className="text-slate-500 first-letter:capitalize">
              {description}
            </p>
            <p className="text-slate-500 first-letter:capitalize">
              {description}
            </p>
            <p className="text-slate-500 first-letter:capitalize">
              {description}
            </p>
          </div>
        </div>
      </section>
    </article>
  );
}
