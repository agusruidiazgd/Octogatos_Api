import React from 'react';
import './Card.scss'


const Card = ({url,id}) =>{
    return(
        <section className="card-cat">
            <div className="card-content">
                <img className ="img-cat" src={url} alt="cat"/>
            </div>
    <p className="p-cat">OCTO ID: {id}</p>
        </section>
    )
}

export default Card;