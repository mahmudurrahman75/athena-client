import React from 'react';
import '../../App.css';

// image 

import img1 from '../../image/achive1.png';
import img2 from '../../image/achive2.png';
import img3 from '../../image/achive3.png';
import img4 from '../../image/achive4.png';

const Achivement = () => {
    return (
        <div className="achivmentBG">
            <div className="container">
                <div className="row">
                    <div className="col-md-4">
                        <div className="achievmentContent">
                            <h2>Our Achievements</h2>
                            <small className="text-secondary">It is a long established fact that a reader will be distracted by
                            the readable content of a page when looking at its layout. The
                            point of using Lorem Ipsum is that it has a more-or-less normal
                    distribution of letter.</small>
                        </div>
                    </div>
                    <div className="col-md-8">
                        <div className="row d-flex">
                            <div className="col-md-6 d-flex">
                                <div className=" ml-5 d-flex justify-content-center achievmentContent2 achivementBoxStyle">
                                    <div>
                                        <img src={img1} alt="" />
                                    </div>
                                    <div className="pl-3">
                                        <h1>700+</h1>
                                        <p>Happy Clients</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="ml-5-sm d-flex justify-content-center achievmentContent2 achivementBoxStyle2">
                                    <div>
                                        <img src={img2} alt="" />
                                    </div>
                                    <div className="pl-3">
                                        <h1>140+</h1>
                                        <p>Projects Completed</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="row">
                            <div className="col-md-6">
                                <div className="ml-5 d-flex justify-content-center achivementBoxStyle3 mt-3">
                                    <div>
                                        <img src={img3} alt="" />
                                    </div>
                                    <div className="pl-3">
                                        <h1>700+</h1>
                                        <p>Happy Clients</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="d-flex justify-content-center achivementBoxStyle4  mt-3">
                                    <div>
                                        <img src={img4} alt="" />
                                    </div>
                                    <div className="pl-3">
                                        <h1>140+</h1>
                                        <p>Projects Completed</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Achivement;