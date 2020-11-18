import React from 'react';
import './PropertyCard.css';

const PropertyCard = ({title, photo, type, index}) => {
    return(
        <div className="card">
            <img src={photo} alt="property"></img>
            <p id="property-type">{type}</p>
            <p>{title}</p>
        </div>

    )
}

export default PropertyCard;