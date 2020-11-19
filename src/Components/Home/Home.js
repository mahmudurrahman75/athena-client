import React from 'react';
import Header from '../Header/Header';
import Project from '../Project/Project';
import Services from '../Services/Services';

const Home = () => {
    return (
        <div>
            <Header></Header>
            <Services></Services>
            <Project></Project>
        </div>
    );
};

export default Home;