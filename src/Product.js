import React from 'react'
import "./css/Product.css"


function Product(props) {
	return (
		<div className="product">
			<img src={props.image} alt="" />
			<div className="product_info">
				<p>{props.title}</p>
				<p className="product_price">
					<strong>₹</strong>
					<strong>{props.price}</strong>
				</p>
			</div>
			<div className="product_rating">
				{Array(props.rating)
	            .fill()
	            .map((_, i) => (
	              <p>🌟</p>
	            ))}
            </div>
			<button>Add to cart</button>
		</div>
	)
}

export default Product