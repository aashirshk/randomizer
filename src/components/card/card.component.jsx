import React from 'react';
import './card.styles.css';

export const Card = ({user}) => (
    <div className="card-container">
        <img alt="user_img" src={user.picture.large}></img>
        <h3>Name: {user.name.title} {user.name.first} {user.name.last}</h3>
        <p>Email: {user.email}</p>
        <p>Age: {user.dob.age}</p>
        <p>Gender: {user.gender}</p>
    </div>
)