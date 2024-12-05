import axios from "axios";

export const api = axios.create({
  baseURL: "https://fakestoreapi.com",
});

interface Product {
  id: number;
  title: string;
  description: string;
  price: number;
  image: string;
  category: string;
}

interface PaginatedResponse {
  total: number;
  products: Product[];
}

export const fetchProducts = async (): Promise<PaginatedResponse> => {
  const limit = 20;

  const { data } = await api.get(`/products?limit=${limit}`);

  return {
    total: limit,
    products: data,
  };
};

export const fetchProductById = async (id: string) => {
  const { data } = await api.get(`/products/${id}`);
  return data;
};
