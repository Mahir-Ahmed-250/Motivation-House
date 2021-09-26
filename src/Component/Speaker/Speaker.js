import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlusCircle, faStar } from '@fortawesome/free-solid-svg-icons';
import { faFacebook, faYoutube, } from '@fortawesome/free-brands-svg-icons';
import './Speaker.css'

const Speaker = (props) => {
    // Data 
    const { name, age, nationality, birthplace, salary, rating } = props.speaker;
    // Icons
    const addIcon = <FontAwesomeIcon icon={faPlusCircle} />
    const addStar = <FontAwesomeIcon icon={faStar} />
    const addFb = <FontAwesomeIcon icon={faFacebook} />
    const addYoutube = <FontAwesomeIcon icon={faYoutube} />
    return (
        <div>
            {/* Single Speaker Card */}
            <div className="card">
                <img src={props.speaker.img} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title text-center name">{name}</h5>
                    <p className="card-text text-center">Age: {age}</p>
                    <p className="card-text text-center">Nationality: {nationality}</p>
                    <p className="card-text text-center">Birth Place: {birthplace}</p>
                    <p className="card-text text-center">Salary: ${salary}</p>
                    <p className="star mt-3 text-center">{addStar}<span className="rating"> {rating}</span></p>
                    <div className="text-center">
                        <button onClick={() => props.addToCart(props.speaker)} type="button" className="btn btn-dark">{addIcon} Add To Team</button>
                        <br />
                        <a className="fb mt-3" href="https://www.facebook.com/">{addFb}</a>
                        <a className="yt mt-3" href="https://www.youtube.com/">{addYoutube}</a>
                    </div>

                </div>
            </div>
        </div>

    );
};

export default Speaker;