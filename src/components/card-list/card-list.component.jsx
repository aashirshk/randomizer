import React from 'react';
import './card-list.styles.css'
import {Card} from '../card/card.component';

export const CardList = (props) => (
    <div className="card-list">
        {props.users.map((user, index)=>(
            <Card key={index+1} user={user}/>
        ))}
    </div>
)