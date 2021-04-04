import React from 'react'
import "./css/Header.css"
import SearchIcon from '@material-ui/icons/Search';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import {Link}  from "react-router-dom"
import { useStateValue } from "./StateProvider";
import {auth } from "./firebase";

function Header() {
	 const [{ basket, user }, dispatch] = useStateValue();
	 function handleAuth(){
	 	if(user)
	 	{
	 		auth.signOut();
	 	}
	 }

	return (
		<div className="header">
			
			<Link to="/">
				<img src="http://pngimg.com/uploads/amazon/amazon_PNG11.png" className="header_logo Tran"/>
			</Link>
			
			<div className="header_search">
				<input className="header_searchInput" type="text" />
				<SearchIcon className="header_searchIcon" />
			</div>

			<div className="header_nav">
			<Link to={!user && "/login"}>
				<div  onClink={handleAuth} className="header_option Tran">
					<span className="header_optionLineOne">Hello Guest</span>
					<span className="header_optionLineTwo">{user? "Sign-in" : "Sign-out"}</span>
				</div>
			</Link>
				
				<div className="header_option Tran">
					<span className="header_optionLineOne">Return &</span>
					<span className="header_optionLineTwo">Order</span>
				</div>

				<div className="header_option Tran">
					<span className="header_optionLineOne">Your</span>
					<span className="header_optionLineTwo">Prime</span>
				</div>
			</div>
			
			<Link to="/checkout">
				<div className="header_shopingCart Tran">
				<ShoppingCartIcon />
				<span className="header_basketCount header_optionLineTwo">{basket?.length}</span>
			</div>
			</Link>
			




		</div>

	)
}

export default Header