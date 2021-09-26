import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlusCircle } from '@fortawesome/free-solid-svg-icons';

const Speaker = (props) => {
    const { name, age, nationality, birthplace, salary } = props.speaker;
    const element = <FontAwesomeIcon icon={faPlusCircle} />
    return (
        <div>
            <div className="card">
                <img src={props.speaker.img} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title text-center">{name}</h5>
                    <p className="card-text text-center">Age: {age}</p>
                    <p className="card-text text-center">Nationality: {nationality}</p>
                    <p className="card-text text-center">Birth Place: {birthplace}</p>
                    <p className="card-text text-center">Salary: ${salary}</p>
                    <div className="text-center">
                        <button onClick={() => props.handleAddToCart(props.speaker)} type="button" className="btn btn-dark">{element} Add To Cart</button>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default Speaker;