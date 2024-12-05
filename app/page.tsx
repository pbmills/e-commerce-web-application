"use client";

import { useEffect, useState } from "react";
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
  const { data, isLoading, error } = useQuery(
    ["products"],
    () => fetchProducts(),
    {
      keepPreviousData: false,
    }
  );
  const [page, setPage] = useState(1);

  const prev = () => {
    if (page > 1) {
      setPage(page - 1);
    }
  };

  const next = () => {
    if (page < 5) {
      setPage(page + 1);
    }
  };

  const [batches, setBatches] = useState<Product[][]>([]);

  useEffect(() => {
    if (data?.products.length) {
      const products = data.products;
      const numOfPages = Math.ceil(products.length / 4);

      const newBatches: Product[][] = [];
      for (let i = 0; i < numOfPages; i++) {
        newBatches.push(products.slice(i * 4, (i + 1) * 4));
      }
      setBatches(newBatches);
    }
  }, [data]);

  // Handle loading, error, and render the product cards
  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Something went wrong</p>;

  return (
    <article className="w-full">
      <div className="inner">
        <h1 className="heading-1 py-8 md:py-12 xl:py-16">Product Listing</h1>
      </div>

      {/* Product Grid */}
      <div className="inner pb-32">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {batches[page - 1]?.map((product: Product) => (
            <ProductCard key={product.id} {...product} />
          ))}
        </div>
        {/* Pagination Controls */}
        <div className="flex justify-between items-center mt-12">
          <button
            onClick={prev}
            disabled={page === 1}
            className="btn-secondary"
          >
            Previous
          </button>
          <span className="text-lg">
            Page {page} of {(data?.total ?? 0) / 4}
          </span>
          <button
            onClick={next}
            disabled={page === (data?.total ?? 0) / 4}
            className="btn-secondary"
          >
            Next
          </button>
        </div>
      </div>
    </article>
  );
}
