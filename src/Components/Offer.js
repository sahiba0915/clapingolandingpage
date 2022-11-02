import React from 'react';
import offer1 from '../images/offer1.png';
import offer2 from '../images/offer2.png';
import offer3 from '../images/offer3.png';

const Offer = () => {
    return (
        <>
        <h1 className='text-center my-5'>What we offer?</h1>
            <div className="container">
                <div className="row">
                    <div className="col-sm d-flex justify-content-center flex-column pb-5">
                        <div className="card" style={{width: "18rem"}}>
                            <img src={offer1} className="card-img-top" alt="offer" style={{height: "200px"}}/>
                            <div className='card-body'>
                                <h3>Customised Curriculum</h3>
                                <p className='card-text'>Customised sessions and module for Basic, Intermediate and Advanced learners.</p>
                            </div>
                        </div>
                        
                    </div>
                    <div className="col-sm d-flex justify-content-center flex-column pb-5">
                        <div className="card" style={{width: "18rem"}}>
                            <img src={offer2} className="card-img-top" alt="offer" style={{height: "200px"}}/>
                            <div className='card-body'>
                                <h3>Experimental Learning </h3>
                                <p className="card-text">Do not study English, rather consume and use it..</p>
                            </div>
                        </div>
                        
                    </div>
                    <div className="col-sm d-flex justify-content-center flex-column pb-5">
                        <div className="card" style={{width: "18rem"}}>
                            <img src={offer3} className="card-img-top" alt="offer" style={{height: "200px"}}/>
                            <div className='card-body'>
                                <h3>Shadowing Method</h3>
                                <p className='card-text'>Think and speak in English rather than translating it from mother tongue.</p>
                            </div>
                        </div>
                        
                    </div>
                </div>
            </div>
        </>
    )
}

export default Offer