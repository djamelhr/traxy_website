import React from 'react';
import ScrollAnimation from 'react-animate-on-scroll';

const AppDownloadStyle1 = () => {
    return (
        <>
            <div id="applications" className="app-download-area">
                <div className="container">
                    <div className="app-download-inner">
                        <div className="row align-items-center">
                            <div className="col-lg-6 col-md-12">
                                <div className="app-download-content">
                                    <span className="sub-title">TRAXY TRACKER APP</span>
                                    <h2>Let's Get Your Free Copy From Apple and Play Store</h2>
                                    <p>Turn a smartphone into powerful feild employee’s instrument. Show your location, exchange vital data with office, view tasks.</p>
                                    <ul>
                                        <li>Easily browse everyday work</li>
                                        <li>Share your progress with office</li>
                                        <li>Show your working status</li>
                                        <li>Chat with team members</li>
                                    </ul>
                                    <div className="btn-box">
                                        {/* <a href="https://play.google.com/store/apps" className="playstore-btn" target="_blank">
                                            <img src="/images/play-store.png" alt="image" />
                                            Get It On
                                            <span>Google Play</span>
                                        </a>
                                        <a href="https://www.apple.com/app-store/" className="applestore-btn" target="_blank">
                                            <img src="/images/apple-store.png" alt="image" />
                                            Download on the
                                            <span>Apple Store</span>
                                        </a> */}
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-6 col-md-12">
                                <div className="app-download-image">
                                    <ScrollAnimation animateIn="fadeInUp">
                                        <img src="/images/app/app-tracker.png" alt="app-img" width="400" />
                                    </ScrollAnimation>
                                </div>
                            </div>
                        </div>

                        <div className="shape5">
                            <img src="/images/shape/shape4.png" alt="shape4" />
                        </div>

                        <div className="lines">
                            <div className="line"></div>
                            <div className="line"></div>
                            <div className="line"></div>
                            <div className="line"></div>
                            <div className="line"></div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default AppDownloadStyle1;