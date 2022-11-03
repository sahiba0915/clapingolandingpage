import React from 'react';
import subscribe from '../images/Subscribe&plans.png';

const Work = () => {
    return (
        <>
            <div className='work-section container-fluid' >
                <div className='row'>
                    <div class="col-10 mx-auto">
                        <div class="parent">
                            <div class="div1">
                                <h1> How it works?</h1>
                            </div>
                            <div class="div2">
                                <h4 className='pb-3'>1. Create Account</h4>
                                <p>
                                    Create your account using phone number or email and take a free trial at ₹1.</p>
                            </div>
                            <div class="div3">
                                <h4 className='pb-3'>3. Select time slot</h4>
                                <p>Subscribe & select any time slot between 10 AM to 12 midnight.</p></div>
                            <div class="div4 mb-5">
                                <img src={subscribe} alt="subscribe" />
                            </div>
                            <div class="div5">
                                <h4 className='pb-3'>2. Subscribe</h4>
                                <p>Choose your preferred duration and select subscription package for your sessions.</p></div>
                            <div class="div6">
                                <h4 className='pb-3'>4. You are done</h4>
                                <p>That’s it! Start practicing and reach your learning goal in speaking.</p></div>
                            <div class="div7">
                                2
                            </div>
                        </div>
                    </div>
                </div>
            </div>


        </>
    )
}

export default Work