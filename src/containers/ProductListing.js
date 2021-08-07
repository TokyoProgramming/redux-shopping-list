import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setProducts } from '../redux/actions/productActions';

const ProductListing = () => {
  const products = useSelector((state) => state.allProducts.products);
  const dispatch = useDispatch();

  useEffect(() => {
    fetchProducts();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const fetchProducts = async () => {
    const getProducts = await fetch('https://fakestoreapi.com/products');
    const data = await getProducts.json();
    dispatch(setProducts(data));
  };

  return (
    <div>
      <h1>ProductListing</h1>
      {products.map((product) => (
        <p key={product.id}>
          {product.id} {product.title} <br />
        </p>
      ))}
    </div>
  );
};

export default ProductListing;
