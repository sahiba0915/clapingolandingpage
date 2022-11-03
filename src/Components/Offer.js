import React from 'react';
import offer1 from '../images/offer1.png';
import offer2 from '../images/offer2.png';
import offer3 from '../images/offer3.png';

const Offer = () => {
    return (
        <>
          <h1 className='text-center my-5'>What we offer?</h1>
            <div className="container d-flex justify-content-center align-item-center flex-wrap">
                <div className="row">
                    <div className="col-md pb-5">
                        <div className="card" >
                            <img src={offer1} className="card-img-top" alt="offer"/>
                            <div className='card-body'>
                                <small class="card-title">Customised Curriculum</small>
                                <p className='card-text'>Customised sessions and module for Basic, Intermediate and Advanced learners.</p>
                            </div>
                        </div>
                        
                    </div>
                    <div className="col-sm pb-5">
                        <div className="card">
                            <img src={offer2} className="card-img-top" alt="offer"/>
                            <div className='card-body'>
                                <small className='card-title'>Experimental Learning </small>
                                <p className="card-text">Do not study English, rather consume and use it..</p>
                            </div>
                        </div>
                        
                    </div>
                    <div className="col-sm  pb-5">
                        <div className="card">
                            <img src={offer3} className="card-img-top" alt="offer"/>
                            <div className='card-body'>
                                <small className='card-title'>Shadowing Method</small>
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