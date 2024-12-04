import axios from 'axios';

export const api = axios.create({
  baseURL: 'https://fakestoreapi.com',
});

export const fetchProducts = async (page: number = 1) => {
  const { data } = await api.get(`/products?limit=10&page=${page}`);
  return data;
};

export const fetchProductById = async (id: string) => {
  const { data } = await api.get(`/products/${id}`);
  return data;
};