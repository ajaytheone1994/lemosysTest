import React from 'react'
import ReusableCard from './reusabelcomponents/ReusableCard';

function Delievery() {
    return (
        <div className="container">
            <div className="row my-5">
                <div className="col-10 mx-auto">
                    <h1 className="text-center">Delievery <strong>Machanism</strong></h1>
                    <p className="text-center">Two unique modes, one enhanced experience</p>
                </div>
            </div>
            <div style={{ display: 'flex', justifyContent:'center' }}>
                <ReusableCard 
                 cardColClass={"col-sm-3"}
                 cardBorder={"card border-default mx-1"}
                 cardTitle={"The Over The Cloud Model"}
                 cardText={"Sample Card 1" }
                 cardStyle={{border:'1px solid lightgray', borderRadius:'10px', width:'100%'}}/>
              <div style={{marginLeft:'20px'}}>
              <ReusableCard
                cardColClass={"col-sm-3"}
                cardBorder={"card border-info mx-1"}
                cardTitle={"The In Class Model"}
                cardText={"Sample Card 2" } 
                cardStyle={{boxShadow: '5px 10px 8px 10px #E4E9EE',  width:'100%'}}/>
              </div>
            </div>
        </div>
    )
}

export default Delievery;
