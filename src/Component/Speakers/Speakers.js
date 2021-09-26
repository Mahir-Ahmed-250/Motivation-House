import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Speaker from '../Speaker/Speaker';
import './Speakers.css'

const Speakers = () => {
    const [speakers, setSpeaker] = useState([]);
    const [cart, setCart] = useState([]);
    useEffect(() => {
        fetch('./Data.JSON')
            .then(res => res.json())
            .then(data => setSpeaker(data))
    }, []);
    const handleAddToCart = (speaker) => {
        const added = cart.find(addedName => addedName.name === speaker.name);
        if (added) {
            alert("You Already Take Him in your Team!");
        }
        else {
            const newCart = [...cart, speaker];
            setCart(newCart)
        };
    };
    return (
        <>
            <div className='container mt-5'>
                <div className="row">
                    <div className='col-9 speakers'>
                        {
                            speakers.map(speaker => <Speaker key={speaker.id} speaker={speaker}
                                handleAddToCart={handleAddToCart}></Speaker>)
                        }
                    </div>
                    <div className='col-3 cart'>
                        <Cart cart={cart}></Cart>
                    </div>

                </div>

            </div>


        </>

    );
};


export default Speakers;