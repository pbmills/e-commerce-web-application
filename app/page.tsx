"use client";

import { useQuery } from "react-query";
import ProductCard from "../components/ProductCard";
import { fetchProducts } from "../utils/api";

interface Product {
  id: number;
  image: string;
  title: string;
  description: string;
  price: number;
}

export default function Home() {
  const { data, isLoading, error } = useQuery("products", () =>
    fetchProducts(1)
  );

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Something went wrong</p>;
  return (
    <article className="w-full">
      <div className="inner">
        <h1 className="text-4xl font-bold py-8 md:py-12 xl:py-16">
          Product Listing
        </h1>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-12 inner pb-32">
        {data.map((product: Product) => (
          <ProductCard key={product.id} {...product} />
        ))}
      </div>
    </article>
  );
}
