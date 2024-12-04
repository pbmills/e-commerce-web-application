'use client';

import { useQuery } from 'react-query';
import ProductCard from '../components/ProductCard';
import { fetchProducts } from '../utils/api';

interface Product {
  id: number;
  image: string;
  title: string;
  description: string;
  price: number;
}

export default function Home() {
  const { data, isLoading, error } = useQuery('products', () => fetchProducts(1));

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Something went wrong</p>;
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-8 md:gap-12 p-8 md:p-12 xl:px-24">
      {data.map((product: Product) => (
        <ProductCard key={product.id} {...product} />
      ))}
    </div>
  );
}
