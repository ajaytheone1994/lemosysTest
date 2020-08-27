import React from 'react'
import Education from './reusabelcomponents/Education';
import Carriculam from './Carriculam';
import CarriculamLandscap from './CarriculamLandscap';
import Delievery from './Delievery';
import Profile from './reusabelcomponents/Profile';

function Home(props) {
   
    return (
        <>
            <Education />
            <Carriculam />
            <CarriculamLandscap />
            <Delievery />
            <Profile />
        </>
    )
}

export default Home;
