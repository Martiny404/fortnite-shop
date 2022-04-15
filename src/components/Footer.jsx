import React from 'react';

const Footer = () => {
	return (
		<footer className="page-footer ">
			<div className="footer-copyright">
				<div className="container">
					&copy; {new Date().getFullYear()} Copyright text
					<a
						href="https://github.com/Martiny404/fortnite-shop"
						target="_blank"
						rel="noreferrer"
						className="grey-text right text-lighten-4"
					>
						Repo
					</a>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
