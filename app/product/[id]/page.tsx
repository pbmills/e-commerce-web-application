import { fetchProductById } from "../../../utils/api";
import ProductDetail from "@/components/ProductDetail";

export default async function ProductList({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const id = (await params).id;
  const product = await fetchProductById(id);

  return <ProductDetail id={Number(id)} {...product} />;
}
