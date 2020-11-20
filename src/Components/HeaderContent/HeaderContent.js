import React from 'react';
import '../../App.css';
import HeaderImg from '../../image/headerImg.png';
const HeaderContent = () => {
    return (
        <div className="container">
            <div className="row pt-5">
                <div className="col-md-6">
                    <h1 className=" font-weight-bold HeaderText pb-3">Florence <br/> agency</h1>
                    <small className='text-secondary'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque pariatur provident nemo ea corrupti eligendi, placeat sunt inventore nulla ipsam culpa distinctio debitis quam in ratione rem unde dolores reprehenderit illum. Illo dignissimos natus minima.</small> <br/>
                    <button className="btn btnStyle mt-5 px-4 mb-3">see pricing</button>
                </div>
                <div className="col-md-6">
                    <img className="img-fluid" src={HeaderImg} alt=""/>
                </div>
            </div>
        </div>
    );
};

export default HeaderContent;