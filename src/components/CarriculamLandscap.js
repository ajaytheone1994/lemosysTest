import React from 'react'

function CarriculamLandscap() {
    return (
        <div style={{ position: 'relative' }}>
            <img src={require('../assets/images/CurriculumLandscapebg.png')} className="img-fluid" />
            <div style={{ position: 'absolute', top: '10%', width: '100%', justifyContent: 'center', textAlign: 'center' }}>
                <h1>Our Curriculum <strong>Landscape</strong></h1>
                <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', textAlign: 'center' }}>
                    <div>
                        <p>Our unique teaching approach employs various pedagogical methodologies to enhance
                          understanding, inspire thought, and drive lateral thinking in the minds of our wards-all with
                          the end goal of moulding young minds to thrive and triumph in he real
                         </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CarriculamLandscap;
