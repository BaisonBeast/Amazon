import React from 'react'
import "./css/Subtotal.css"
import { useStateValue } from "./StateProvider";
import {getBasketTotal} from "./Reducer"

const CurrencyFormat = require('react-currency-format');
function Subtotal() {
	const [{ basket, user }, dispatch] = useStateValue();

	return (
		<div className="subtotal">
			<CurrencyFormat 
				renderText={(value) =>(
					 <>
	 					<p>
					    	Subtotal ({basket?.length} items): <strong>{value}</strong>
						</p>
						<small className="subtotal_gift">
							<input type="checkbox" />This order contains a gift 
						</small>				
					</>
				)}
				dicimalScale={2}
				value={getBasketTotal(basket)}
				displayType={'text'} 
				thousandSeparator={true}
				prefix={'₹'}
			/>
			<button>Proceed to checkout</button>
		</div>
	)
}

export default Subtotal