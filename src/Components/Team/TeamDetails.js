import React from 'react';

const TeamDetails = ({ td }) => {
    return (
        <div className="col-md-4 text-center d-flex justify-content-center ">
            <div className="TeamBoxStyle">
                <h1 className="font-weight-bold">{td.price}</h1>
                <div className="TeamPara">
                    <p>{td.package}</p>
                </div>
                <div className="teamContent">
                    <li> Homepage</li>
                    <li>8 Inner Pages</li>
                    <li>Asset file</li>
                    <li>Source file</li>
                    <li>Free Stock Photos</li>
                    <li>30 Days Free Support</li>
                    <li>24/7 Support</li>
                </div>
                <button className="btn btnStyle px-md-4 mt-2 btnDisplay ">Order Now</button>
            </div>
        </div>
    );
};

export default TeamDetails;