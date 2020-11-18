import React from 'react';
import { FaStar } from "react-icons/fa";
import './PropertyCard.css';

const PropertyCard = ({title, photo, type, rating, superHost, index}) => {
    return(
        <div className="card">
            <img src={photo} alt="property"></img>
            <div className="details">
            <p id="property-type">{type}</p>
            <div className="ratings-div">
            <FaStar />
            <p id="rating">{rating}</p>
            </div>
            </div>
            <p>{title}</p>
        </div>

    )
}

export default PropertyCard;