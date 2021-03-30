import React from 'react'
import "./css/Header.css"
import SearchIcon from '@material-ui/icons/Search';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import {Link}  from "react-router-dom"
import { useStateValue } from "./StateProvider";

function Header() {
	 const [{ basket, user }, dispatch] = useStateValue();

	return (
		<div className="header">
			
			<Link to="/">
				<img src="http://pngimg.com/uploads/amazon/amazon_PNG11.png" className="header_logo"/>
			</Link>
			
			<div className="header_search">
				<input className="header_searchInput" type="text" />
				<SearchIcon className="header_searchIcon" />
			</div>

			<div className="header_nav">
			<Link to="/login">
				<div className="header_option">
					<span className="header_optionLineOne">Hello Guest</span>
					<span className="header_optionLineTwo">Sign in</span>
				</div>
			</Link>
				
				<div className="header_option">
					<span className="header_optionLineOne">Return &</span>
					<span className="header_optionLineTwo">Order</span>
				</div>

				<div className="header_option">
					<span className="header_optionLineOne">Your</span>
					<span className="header_optionLineTwo">Prime</span>
				</div>
			</div>
			
			<Link to="/checkout">
				<div className="header_shopingCart">
				<ShoppingCartIcon />
				<span className="header_basketCount header_optionLineTwo">{basket?.length}</span>
			</div>
			</Link>
			




		</div>

	)
}

export default Header