import React from 'react';

const Header = () => {
	return (
		<header className="header">
			<nav className="nav-wrapper">
				<a href="!#" className="brand-logo">
					React Shop
				</a>
				<ul id="nav-mobile" className="right ">
					<li>
						<a href="https://github.com/Martiny404/fortnite-shop" target="_blank" rel="noreferrer">
							Repo
						</a>
					</li>
				</ul>
			</nav>
		</header>
	);
};

export default Header;
