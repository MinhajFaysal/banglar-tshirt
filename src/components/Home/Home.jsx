import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import TShirt from '../tShirt/TShirt';
import './Home.css'
import Cart from '../Cart/Cart';
import toast from 'react-hot-toast';

const Home = () => {
    const tshirts = useLoaderData();

    const [cart, setCart] = useState([]);

    const handleAddToCart = tshirt => {

        const exits = cart.find(ts => ts._id === tshirt._id)
        if (exits) {
            toast('Already added');
        }
        else {
            const newCart = [...cart, tshirt];
            setCart(newCart);
        }
    }

    const handleRemoveFromCart = id => {
        const remaining = cart.filter(ts => ts._id !== id);
        setCart(remaining);
    }

    return (
        <div className='home-container'>
            <div className='t-shirts-container'>
                {
                    tshirts.map(tshirt => <TShirt
                        key={tshirt._id}
                        tshirt={tshirt}
                        handleAddToCart={handleAddToCart}
                    ></TShirt>)
                }
            </div>
            <div className='cart-container'>
                <Cart
                    cart={cart}
                    handleRemoveFromCart={handleRemoveFromCart}
                ></Cart>
            </div>
        </div >
    );
};

export default Home;