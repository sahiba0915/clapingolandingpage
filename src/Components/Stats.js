import React from 'react';
const Stats = () => {
    return (
        <>
            <section className='d-flex align-items-center mb-5'>
                <div className='container-fluid' >
                    <div className='row'>
                        <div className="col-10">
                            <div class="row">
                                <div className='stats col-md-6 pt-5 d-flex justify-content-center flex-column pb-5'>
                                <div className='btn-hero'>
                                            <div className="stats-card">
                                                <h1>50k <strong>+</strong></h1>
                                                <small className='me-4'>Mobile Downloads</small>
                                            </div>
                                            <div className="stats-card">
                                                <h1>80k <strong>+</strong></h1>
                                                <small>Happy Learners</small>
                                            </div>
                                </div>

                                <div className='btn-hero mt-3'>
                                <div className="stats-card">
                                            <h1>53k <strong>+</strong></h1>
                                                <small className='ms-4'>Sessions per month</small>
                                            </div>
                                            <div className="stats-card">
                                                <h1>200k <strong>+</strong></h1>
                                                <small>Speakers around the globe</small>
                                            </div>
                                </div>
                                </div>
                                <div className='col-md-6 pt-5 mt-5'>
                                    <strong>Book a trial</strong>
                                    <h1>Start your english speaking journey today!</h1>
                                    <small>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Neque pellentesque praesent vitae sit sagittis venenatis.</small>

                                    <div className='btn-hero mt-3'>
                                        <button className="btn-book">Book a trial</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Stats