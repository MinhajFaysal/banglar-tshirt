import React from 'react';
import './TShirt.css'

const TShirt = ({ tshirt, handleAddToCart }) => {
    const { _id, index, price, picture, name, gender } = tshirt;
    return (
        <div className='t-shirt'>
            <img src={picture} alt="" />
            <h4>Name: {name}</h4>
            <p>Price: ${price}</p>
            <button onClick={() => handleAddToCart(tshirt)}>Buy Now</button>
        </div>
    );
};

export default TShirt;