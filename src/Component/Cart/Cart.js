import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './Cart.css'
import { faDollarSign, faUser } from '@fortawesome/free-solid-svg-icons';


const Cart = (props) => {
    const { cart } = props
    let totalQuantity = 0;
    let total = 0;
    for (const speaker of cart) {
        total = total + speaker.salary
        totalQuantity = totalQuantity + 1
    }
    const speakerAdded = <FontAwesomeIcon icon={faUser} />
    const dollar = <FontAwesomeIcon icon={faDollarSign} />
    return (
        <div>
            <div className="cart-summary">
                <h3>{speakerAdded} Speaker Added: {totalQuantity}</h3>
                <h5>Total Cost: {dollar}{total}</h5>
                {
                    cart.map(cart => <div key={cart.id}>
                        <div className="cart-added">
                            <img className='cart-img' src={cart.img} alt="" />
                            <div>
                                <h6>Name: {cart.name}</h6>
                                <p>Salary: {cart.salary}</p>
                            </div>
                        </div>
                    </div>)
                }

            </div>
        </div>
    );
};

export default Cart;