import React from 'react'
import "./Header.css"
import SearchIcon from '@material-ui/icons/Search';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';

function Header() {
	return (
		<div className="header">
			

			<img src="http://pngimg.com/uploads/amazon/amazon_PNG11.png" className="header_logo"/>
			
			<div className="header_search">
				<input className="header_searchInput" type="text" />
				<SearchIcon className="header_searchIcon" />
			</div>

			<div className="header_nav">
				<div className="header_option">
					<span className="header_optionLineOne">Hello Guest</span>
					<span className="header_optionLineTwo">Sign in</span>
				</div>

				<div className="header_option">
					<span className="header_optionLineOne">Return &</span>
					<span className="header_optionLineTwo">Order</span>
				</div>

				<div className="header_option">
					<span className="header_optionLineOne">Your</span>
					<span className="header_optionLineTwo">Prime</span>
				</div>
			</div>

			<div className="header_shopingCart">
				<ShoppingCartIcon />
				<span className="header_basketCount header_optionLineTwo">0</span>
			</div>




		</div>

	)
}

export default Header