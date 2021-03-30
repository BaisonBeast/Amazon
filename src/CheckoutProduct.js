import React from 'react'
import "./css/CheckoutProduct.css"
import { useStateValue } from "./StateProvider";

function CheckoutProduct(props) {
	const [{ basket }, dispatch] = useStateValue();
	
	const removeFromCart = ()=>{
		dispatch({
				type: "Remove_From_Cart", 
				id: props.id}
			)}

	return (
		<div className="checkoutProduct">
			<img src={props.image} className="checkoutProduct_image" />

			<div className="checkoutProduct_info">

				<p className="checkoutProduct_title">{props.title}</p>
				<p className="checkoutProduct_price">
					<small>₹</small>
					<strong>{props.price}</strong>
				</p>
				<div className="checkoutProduct_rating">
					{Array(props.rating)
		            .fill()
		            .map((_, i) => (
		              <p>🌟</p>
		            ))}
            	</div>
				<button onClick={removeFromCart}>Reomve from cart</button>

			</div>
			
		</div>
			
	)
}

export default CheckoutProduct;