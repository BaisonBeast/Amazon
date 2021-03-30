import React from 'react'
import "./css/Product.css"
import { useStateValue } from "./StateProvider";


function Product(props) {
	const [{ basket }, dispatch] = useStateValue();

	const addToBasket = () => {
    // dispatch the item into the data layer
    dispatch({
      type: "ADD_TO_BASKET",
      item: {
        id: props.id,
        title: props.title,
        image: props.image,
        price: props.price,
        rating: props.rating,
      },
    });
  };

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
			<button onClick={addToBasket}>Add to cart</button>
		</div>
	)
}

export default Product