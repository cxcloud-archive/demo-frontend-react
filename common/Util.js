import 'isomorphic-fetch';

const API_URL = 'https://dev.cxcloud.com/api/v1';

export const fetchCategories = async () =>
  fetch(`${API_URL}/categories`).then(res => res.json());

export const fetchProductById = async productId =>
  fetch(`${API_URL}/products/${productId}`).then(res => res.json());

export const fetchProducts = async categoryId =>
  fetch(`${API_URL}/products/byCategory/${categoryId}`)
    .then(res => res.json())
    .then(({ results = [] }) => results);
