import React from 'react';
import ProductCard from './ProductCard';

const ProductsList = (props) => {
	const { products = [], addProductToCart = () => {} } = props;
	if (!products.length) {
		return <h3>Список товаров не доступен!</h3>;
	}
	return (
		<div className="products">
			{products.map((p) => {
				return <ProductCard addProductToCart={addProductToCart} key={p.id} {...p} />;
			})}
		</div>
	);
};

export default ProductsList;
