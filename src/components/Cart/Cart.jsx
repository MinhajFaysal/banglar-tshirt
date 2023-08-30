import React from 'react';

const Cart = ({ cart, handleRemoveFromCart }) => {
    return (
        <div>
            <h2>CART SUMMARY</h2>
            <h3>Total Product: {cart.length}</h3>
            {
                cart.map(tshirt => <p
                    key={tshirt._id}
                >{tshirt.name} <button onClick={() => handleRemoveFromCart(tshirt._id)}>X</button></p>)
            }
        </div>
    );
};

export default Cart;