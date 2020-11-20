import React from 'react';
import TeamDetails from './TeamDetails';

const Team = () => {

    const ChooseYourDedicatedTeam = [
        {
            price: "$199",
            package: "For Basic",
            detail: "Homepage No Inner Page Asset file Source file Free Stock Photos 10 Days Free Support 24/7 Support",
        },
        {
            price: "$399",
            package: "For Preferred",
            detail: "Homepage 4 Inner Pages Asset file Source file Free Stock Photos 20 Days Free Support 24/7 Support",
        },
        {
            price: "$599",
            package: "For Elite",
            detail: "Homepage 8 Inner Pages Asset file Source file Free Stock Photos 30 Days Free Support 24/7 Support",
        }
    ]
    return (
        <div className="TeamBG">
            <div className="container">
                <h2 className="text-center pb-5 teamTitle">Choose Your Dedicated Team</h2>
                <div className="row">
                    {
                        ChooseYourDedicatedTeam.map(td => <TeamDetails td={td} key={td.name}></TeamDetails>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Team;