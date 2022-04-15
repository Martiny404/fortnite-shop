import React from 'react';

const CartItem = ({
	id,
	name,
	price,
	quantity,
	deleteProductFromOrder = () => {},
	decreaseProductQuantity = () => {},
	addProductQuantity = () => {},
}) => {
	return (
		<li className="collection-item cart-item ">
			<div className="cart-product-info">
				<div className="cart-prodct-quantitny">
					<div className="cart-prodct-quantitny-text">
						<b>
							{name} x {quantity}
						</b>
					</div>
					<div className="cart-prodct-quantitny-btns">
						<button onClick={() => addProductQuantity(id)} className="cart-prodct-quantitny-btn">
							+
						</button>{' '}
						<button onClick={() => decreaseProductQuantity(id)} className="cart-prodct-quantitny-btn">
							-
						</button>
					</div>
				</div>
				<span className="cart-price">{price * quantity} rub.</span>
			</div>
			<button onClick={() => deleteProductFromOrder(id)} className="secondary-content cart-product-delete">
				<i className="material-icons">delete</i>
			</button>
		</li>
	);
};

export default CartItem;
