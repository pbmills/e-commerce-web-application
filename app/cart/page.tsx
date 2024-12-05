"use client";

import { useCount } from "@/context/CountContext";
import { useRouter } from "next/navigation";
import Image from "next/image";

export default function Cart() {
  const { cart, cartQty, removeFromCart } = useCount();
  const router = useRouter();

  const back = () => {
    router.back();
  };

  const totalPrice = cart.reduce(
    (sum, item) => (sum += item.price * item.qty),
    0
  );

  return (
    <div className="inner pt-12 pb-24">
      {/* Back Button */}
      <button
        onClick={back}
        className="flex items-center gap-1 group max-w-max"
      >
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
        <span>Go Back</span>
      </button>
      <h1 className="heading-1 py-8 md:py-12 xl:py-16">Shopping Cart</h1>
      <div className="w-full">
        {cart.length ? (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 xl:gap-12">
            {cart?.map((item) => {
              return (
                <div
                  key={item.price}
                  className="flex flex-col md:flex-row gap-4 md:gap-8"
                >
                  <div className="w-full md:w-32 aspect-square relative rounded-md bg-white">
                    <Image
                      src={item.image}
                      alt={item.title}
                      className="w-full object-contain object-center p-2"
                      fill
                    />
                  </div>
                  <div className="flex-1">
                    <h1 className="text-xl xl:text-2xl mb-2">{item.title}</h1>
                    <div className="flex items-baseline gap-2 text-stone-500 text-sm">
                      <span>Quantity : </span>
                      <span>{item.qty}</span>
                    </div>
                    <div className="flex items-baseline gap-2 text-stone-500 text-sm">
                      <span>Price : </span>
                      <span>${item.price}</span>
                    </div>
                    <div className="flex items-baseline gap-2 text-stone-500 text-sm">
                      <span>Total Price : </span>
                      <span>${(item.qty * item.price).toFixed(2)}</span>
                    </div>
                    <div className="w-full">
                      <button onClick={() => removeFromCart(item.id)}>
                        Remove
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        ) : (
          "No Items in you cart"
        )}
      </div>
      {cart.length ? (
        <div className="w-full flex justify-end text-right mt-12">
          <div className="flex flex-col items-end">
            <p className="text-xl xl:text-3xl font-heading">
              Total Items : {cartQty}
            </p>
            <p className="text-xl xl:text-3xl font-heading mt-2">
              Total Cost : ${totalPrice.toFixed(2)}
            </p>
            <button role="button" className="btn-primary mt-8">
              Continue to pay
            </button>
          </div>
        </div>
      ) : null}
    </div>
  );
}
