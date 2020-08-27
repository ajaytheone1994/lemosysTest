import React from 'react'

function Carriculam() {
    return (
        <div className="container">
            <div className="row my-5">
                <div className="col-10 mx-auto">
                    <h1 className="text-center">Curriculum</h1>
                    <div className="row my-5">
                        <div style={{ display: 'flex', justifyContent: 'space-around' }}>
                            <div style={{padding:20,backgroundColor:'#FFEBEC', border:'2px solid lighgray'}} className="rounded-circle">
                            <img src={require('../assets/images/Technology.png')} />
                           
                            </div>
                          
                           <div style={{padding:20, backgroundColor:'#DDECFF', border:'2px solid lighgray' }} className="rounded-circle"> 
                           <img src={require('../assets/images/Content.png')} />
                         
                           </div>
                         <div style={{padding:20,backgroundColor:'#DDFFEF', border:'2px solid lighgray' }} className="rounded-circle">
                         <img src={require('../assets/images/Games.png')} />
                      
                         </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Carriculam;
