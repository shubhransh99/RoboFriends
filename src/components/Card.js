import React from "react";

const Card = ({id, name,email,username}) => {
    return(
        <div className='tc bg-light-green dib br3 p3 ma2 grow bw2 shadow-5'>
            <img src={`https://robohash.org/${id}`} alt="placeholder" />
            <div>
                <h2>{name}</h2>
                <p>{email}</p>
            </div>
        </div>
    )
}

export default Card;