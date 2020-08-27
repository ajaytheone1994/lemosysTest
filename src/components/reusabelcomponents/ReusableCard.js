import React from 'react'
import {Card, Button } from 'react-bootstrap';
function ReusableCard(props) {
    return (
        <div className={props.cardColclassName}>
        <div classNameName={props.cardBorder} style={props.cardStyle}>
            {props.image}
          <div className="card-body">
            <strong className="card-title">{props.cardTitle}</strong>
            <p className="card-text">
            
             <ul>
                <li style={{color: 'red'}}><span style={{color: 'black'}}>This bullet is red</span></li>
                <li style={{color: 'green'}}><span style={{color: 'black'}}>This bullet is green</span></li>
                <li style={{color: 'blue'}}><span style={{color: 'black'}}>This bullet is blue</span></li>
                <li style={{color: 'white'}}><span style={{color: 'black'}}>This bullet is white</span></li>
                <li style={{visibility: 'hidden'}}><span style={{visibility: 'visible'}}>This bullet is hidden</span></li>
            </ul>
            </p>
            {props.children}
          </div>
        </div>
      </div>
    )
}

export default ReusableCard;
