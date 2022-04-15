import React from 'react';
import CartItem from './CartItem';

const CartList = ({
	order = [],
	handleCartVisible = () => {},
	deleteProductFromOrder = () => {},
	addProductQuantity = () => {},
	decreaseProductQuantity = () => {},
}) => {
	const totalPrice = order.reduce((sum, el) => {
		return el.price * el.quantity + sum;
	}, 0);

	return (
		<div className="cart-bg-overlay">
			<ul className="collection cart-list ">
				<button className="cart-close" onClick={handleCartVisible}>
					<i className="material-icons">close</i>
				</button>
				<span className="cart-text">Корзина</span>
				{order.length ? (
					order.map((item) => (
						<CartItem
							addProductQuantity={addProductQuantity}
							decreaseProductQuantity={decreaseProductQuantity}
							deleteProductFromOrder={deleteProductFromOrder}
							key={item.id}
							{...item}
						/>
					))
				) : (
					<span className="cart-is-empty">Корзина пуста</span>
				)}
				<div className="cart-order-info">
					<span className="cart-text">Общая стоимость: {totalPrice} rub.</span>
					<button className="cart-order-btn">Оформить заказ</button>
				</div>
			</ul>
		</div>
	);
};

export default CartList;
