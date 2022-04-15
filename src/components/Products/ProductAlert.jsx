import React, { useEffect } from 'react';

const ProductAlert = ({ text = '', handleCloseAlert = () => {} }) => {
	useEffect(() => {
		const timerId = setTimeout(handleCloseAlert, 2500);

		return () => {
			clearTimeout(timerId);
		};

		// eslint-disable-next-line
	}, [text]);

	return (
		<div id="toast-container">
			<div className="toast">{text} добавлен в корзину!</div>
		</div>
	);
};

export default ProductAlert;
