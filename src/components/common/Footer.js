import React from 'react'
import { Route, Link, BrowserRouter as Router } from 'react-router-dom'
import Logo from './Logo';
function Footer() {
    return (
    
            <div style={{position:'relative'}}>
                < img src={require('../../assets/images/footer_background.png')} className="img-fluid"/>
                <div style={{position:'absolute', top:'30%', width:'100%', justifyContent:'center', textAlign:'center'}}>
                <div style={{display:'flex', flexDirection:'column', justifyContent:'space-around'}}>
                    <Logo/> 
                    <h2 className="my-3">Contact <strong>Us</strong></h2>
                  <div className="my-5" style={{display:'inline-grid', gridTemplateColumns:'50px 50px 50px 50px', justifyContent:'center', textAlign:'center'}}>
           
                    <div><img src={require('../../assets/images/icon/facebook.png')}/></div>
                    <div><img src={require('../../assets/images/icon/instagram.png')}/></div>
                    <div><img src={require('../../assets/images/icon/linkedin.png')}/></div>
                    
                  </div>
                    <h4>copyright2020 all rights reserved</h4>
                </div>
                </div>
            </div>

        
    )
}

export default Footer
