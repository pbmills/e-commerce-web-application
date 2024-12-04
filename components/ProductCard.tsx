import Link from "next/link";
import Image from "next/image";

interface ProductCardProps {
  id: number;
  title: string;
  description: string;
  price: number;
  image: string;
}

export default function ProductCard({
  id,
  title,
  description,
  price,
  image,
}: ProductCardProps) {
  return (
    <Link href={`/product/${id}`} className="group flex flex-col">
      <div className="w-full aspect-[0.8] rounded-3xl bg-white relative">
        <Image
          src={image}
          alt={title}
          className="w-full object-contain object-center p-8 group-hover:scale-110 transition-all duration-500"
          fill
        />
      </div>
      <div className="w-full mt-4 flex flex-col flex-1">
        <h2 className="font-medium line-clamp-2 text-lg">{title}</h2>
        <p className="text-neutral-500 mt-1 text-sm flex-1 line-clamp-3">
          {description}
        </p>
        <p className="font-bold mt-4 text-xl">${price.toFixed(2)}</p>
      </div>
    </Link>
  );
}
