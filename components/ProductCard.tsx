import Link from 'next/link';
import Image from 'next/image';

interface ProductCardProps {
  id: number;
  title: string;
  price: number;
  image: string;
}

const ProductCard = ({ id, title, price, image }: ProductCardProps) => (
  <div className="rounded-2xl border border-gray-100 group">
    <div className="w-full aspect-square relative">
      <Image src={image} alt={title} className="p-10 w-full object-contain object-center group-hover:scale-110 transition-all duration-500" fill />
    </div>
    <div className="p-6">
      <h2 className="text-lg font-bold line-clamp-1">{title}</h2>
      <p className="flex-1">${price.toFixed(2)}</p>
      <Link href={`/product/${id}`}>
        <span className="text-blue-500">View Details</span>
      </Link>
    </div>
  </div>
);

export default ProductCard;