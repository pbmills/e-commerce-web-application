import Image from 'next/image';
import Link from 'next/link';
import { fetchProducts } from '../../../utils/api';

export default async function ProductList({
   params,
 }: {
   params: Promise<{ id: string }>
 }) {
   const products = await fetchProducts(1);
   const id = (await params).id;
   const product = products[Number(id) - 1]

   return (
      <div className="max-w-screen-lg mx-auto w-full p-8 md:p-12 xl:px-24 space-y-4">
         <Link href="/">Go Back</Link>
         <div className="w-full relative aspect-square max-w-md">
            <Image src={product.image} alt={product.title} className="w-full object-contain object-center p-8 border border-gray-100 rounded-2xl" fill />
         </div>
        <h1 className="text-2xl font-bold">{product.title}</h1>
        <p>{product.description}</p>
        <p className="text-lg font-bold">${product.price.toFixed(2)}</p>
      </div>
   );
}
