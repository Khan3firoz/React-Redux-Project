import React from 'react'
import iphone from '../img/iphone.png'
import cart from '../img/cart.png'

export const Home = () => {
    return (
        <div>
            <div className="add-to-cart">
                <img src={cart} />
            </div>
            <h1>Home Componenr</h1>
            <div className="cart-wrapper">
                <div className="img-wrapper item">
                    <img src={iphone} style={{ height: "10rem", width: "10rem" }} />
                </div>
                <div className="text-wrapper item">
                    <span>I-PhonePrice: $1000</span>
                </div>
                <div className="btn-wrapper item">
                    <button>
                        Add To Cart
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Home;