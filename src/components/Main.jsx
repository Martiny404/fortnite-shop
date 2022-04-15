import React, { useState, useEffect } from 'react';
import { API_KEY, API_URL } from '../config';
import Preloader from './Preloader';
import ProductsList from './Products/ProductsList';
import Cart from './Cart/Cart';
import CartList from './Cart/CartList';
import ProductAlert from './Products/ProductAlert';

function saveOrderInLocalStorage(body) {
	const json = JSON.stringify(body);
	localStorage.setItem('order', json);
}

function getOrderInLocalStorage() {
	const json = localStorage.getItem('order');
	if (json) {
		const order = JSON.parse(json);
		return order;
	} else {
		return [];
	}
}

const Main = () => {
	const [products, setProducts] = useState([]);
	const [loading, setLoading] = useState(true);
	const [order, setOrder] = useState(getOrderInLocalStorage);
	const [isCartVisible, setCartVisible] = useState(false);
	const [alert, setAlert] = useState('');

	if (isCartVisible) {
		document.body.style.overflow = 'hidden';
	} else {
		document.body.style.overflow = '';
	}

	useEffect(() => {
		fetch(API_URL, {
			headers: {
				Authorization: API_KEY,
			},
		})
			.then((r) => r.json())
			.then((data) => {
				data.featured && setProducts(data.featured);
				setLoading(false);
			});
	}, []);

	useEffect(() => {
		saveOrderInLocalStorage(order);
	}, [order]);

	const deleteProductFromOrder = (id) => {
		const newOrder = order.filter((item) => item.id !== id);
		setOrder(newOrder);
	};

	const addProductToCart = (product) => {
		const itemIndex = order.findIndex((el) => el.id === product.id);
		if (itemIndex < 0) {
			const cartItem = {
				...product,
				quantity: 1,
			};
			setOrder([...order, cartItem]);
		} else {
			const newOrder = order.map((orderItem, i) =>
				i === itemIndex ? { ...orderItem, quantity: orderItem.quantity + 1 } : orderItem
			);
			setOrder(newOrder);
		}
		setAlert(product.name);
	};

	const handleCartVisible = () => {
		setCartVisible(!isCartVisible);
	};

	const addProductQuantity = (id) => {
		const newOrder = order.map((item) => {
			if (item.id === id) {
				return {
					...item,
					quantity: item.quantity + 1,
				};
			} else {
				return item;
			}
		});
		setOrder(newOrder);
	};
	const decreaseProductQuantity = (id) => {
		const newOrder = order
			.map((item) => {
				if (item.id === id) {
					return {
						...item,
						quantity: item.quantity > 0 ? item.quantity - 1 : 0,
					};
				} else {
					return item;
				}
			})
			.filter((item) => item.quantity > 0);

		setOrder(newOrder);
	};

	const handleCloseAlert = () => {
		setAlert('');
	};

	return (
		<main className="main content container">
			<Cart quantity={order.length} handleCartVisible={handleCartVisible} />
			{loading ? <Preloader /> : <ProductsList addProductToCart={addProductToCart} products={products} />}
			{isCartVisible && (
				<CartList
					decreaseProductQuantity={decreaseProductQuantity}
					addProductQuantity={addProductQuantity}
					deleteProductFromOrder={deleteProductFromOrder}
					handleCartVisible={handleCartVisible}
					order={order}
				/>
			)}
			{alert && <ProductAlert text={alert} handleCloseAlert={handleCloseAlert} />}
		</main>
	);
};

export default Main;
