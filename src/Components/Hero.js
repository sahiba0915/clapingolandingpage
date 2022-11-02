import React from 'react';

const Hero = () => {
    return (
        <>
            <section id="hero" className='d-flex align-items-center'>
                <div className='container-fluid header' >
                    <div className='row'>
                        <div class="col-10 mx-auto">
                            <div class="row">
                                <div className='col-md-6 pt-5'>
                                    <h1>Hone your english speaking skills over <br/>
                                        <strong> one-to-one </strong>video call</h1>
                                    <small className='my-3'>Practice english conversation with excellent communuicators
                                        <br/>across the country and speak like a PRO 😎.</small>
                                        <div className='btn-hero mt-3'>
                                            <a href="" className="btn-book">Book a trial</a>
                                            <a href="" className="btn-download">Download our app</a>
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