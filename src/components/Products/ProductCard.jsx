import React from 'react';

const ProductCard = (props) => {
	const { id, name, description, price, full_background, addProductToCart = () => {} } = props;

	return (
		<div className="card">
			<div className="card-image">
				<img src={full_background} alt={[name, id].join('')} />
			</div>
			<div className="card-content">
				<span className="card-title">{name}</span>
				<p>{description}</p>
			</div>
			<div className="card-action">
				<button
					onClick={() =>
						addProductToCart({
							id,
							name,
							price,
						})
					}
					className="btn"
				>
					BUY NOaa
				</button>
				<span className="right card-price">{price} rub.</span>
			</div>
		</div>
	);
};

export default ProductCard;
