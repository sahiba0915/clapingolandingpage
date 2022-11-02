import React from 'react';
import Navbar from './Navbar';

const Hero = () => {
    return (
        <>
         <Navbar/>
            <section className='hero d-flex align-items-center mb-5'>
                <div className='container-fluid' >
                    <div className='row'>
                        <div class="col-10 mx-auto">
                            <div class="row">
                                <div className='col-md-6 pt-5 d-flex justify-content-center flex-column'>
                                    <h1>Hone your english speaking skills over <br/>
                                        <strong> one-to-one </strong>video call</h1>
                                    <small className='my-3'>Practice english conversation with excellent communuicators
                                        <br/>across the country and speak like a PRO 😎.</small>
                                        <div className='btn-hero mt-3'>
                                            <a href="#" className="btn-book">Book a trial</a>
                                            <a href="#" className="btn-download">Download our app</a>
                                        </div>
                                </div>
                                <div className='col-md-6 pt-5 mt-5 hero-img'></div>  
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Hero