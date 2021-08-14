import React from 'react';
import './card.css';

const rates = {
    'NPL' : "118.81"
}

function datechangeHandler(value) {
    let changedDate =  value.split("/").reverse().join("/"); 
    let changedDateInFormat = changedDate.replaceAll("/", "-");
    return changedDateInFormat 
}

function currencyChangeHandler(value) {
    return Math.ceil(parseFloat(value.slice(1)) * parseFloat(rates.NPL))
}

const Card = props => {
    return (
    <div className='card-container'>
        <img alt="monsters" src={props.monster.image} />
        <h1> {props.monster["name "]} </h1>
        <p> Price: <b>RS </b> {currencyChangeHandler(props.monster.price)} </p>
        <p> Stock: {props.monster.stock} </p>
        <p> Created Date: {datechangeHandler(props.monster.published_date)} </p>
        <p> Genre: {props.monster.genre} </p>
        <p> Author: {props.monster.author} </p>
    </div>
    )
}

export default Card;