import React from 'react';

const Cart = (props) => {
	const { quantity = 0, handleCartVisible = () => {} } = props;
	return (
		<div className="cart blue darken-4 white-text" onClick={handleCartVisible}>
			<i className="material-icons">shopping_cart</i>
			{quantity ? <span className="cart-quantity">{quantity}</span> : null}
		</div>
	);
};

export default Cart;
