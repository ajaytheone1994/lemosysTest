import React from 'react'
import './style.css';
function Education(props) {
    return (
        <div className="container">
            <div className="row my-5">
                <div className="col-lg-10 mx-auto">
                    <div className="row">
                        <div className="col-md-6 col-12">
                        <img src={require('../../assets/images/WhatIsGraf.png')} className="img-fluid"/>
                        </div>
                        <div className="col-md-6 col-12">
                            <article>
                                <h1>What is <strong>Graf?</strong></h1>
                                <p>
                                  GRAF is a professionally curated program that acts as a supplement to the foundations of the Indian education
                                  system. It is designed with students at the core (class 5-12) -- to equip them with valuable skills that are 
                                  crucial to finding success in the raal
                                  world and creating Value wherever they go.  
                                </p>
                            </article>
                        </div>
                    </div>
                    <div className="row mt-5">
                        <div className="col-md-6 col-12">
                        <article > 
                                <h1 style={{fontSize:'30px'}}>What is <strong>Education Plus?</strong></h1>
                                <p>
                                  Education+ is a curated syllabus designed ground-up
                                  by Graf to build extra-curricular, skills sets in children
                                  and young adults.

                                </p>
                                <p>
                                    Built to supplement core curriculums such as CBSE,
                                    ICSE, IB, and IGS=CSE, each module under the Education+ umberella nurtures <strong>creative thinking,
                                    problems solving and solutioning mindsets.    
                                    </strong>
                                </p>
                            </article>
                        </div>
                        <div className="col-md-6 col-12">
                        <img src={require('../../assets/images/WhatIsEducationPlus.png')} className="img-fluid"/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Education
