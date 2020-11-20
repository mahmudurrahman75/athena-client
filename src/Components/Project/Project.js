import React from 'react';
import '../../App.css';
import projectImg from '../../image/projectimg.png';
const Project = () => {
    return (
        <div className="projectBG">
            <div className="container">
                <div className=" row d-flex justify-content-center align-items-center pt-5">
                    <div className="col-md-6">
                        <img className="img-fluid text-center" src={projectImg} alt="" />
                    </div>
                    <div className="col-md-6 ">
                        <div className="ml-5">
                            <h3 className=" pb-3">Stay Running & Project</h3>
                            <small className='text-secondary'>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letter.</small> <br />
                            <button className="btn btnStyle mt-5 px-4 mb-3">see pricing</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Project;