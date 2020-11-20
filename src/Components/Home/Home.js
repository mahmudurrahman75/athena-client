import React from 'react';
import Achivement from '../Achivement/Achivement';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import Project from '../Project/Project';
import Services from '../Services/Services';
import Team from '../Team/Team';


const Home = () => {
    return (
        <div>
            <Header></Header>
            <Services></Services>
            <Project></Project>
            <Achivement></Achivement>
            <Team></Team>
            <Footer></Footer>
        </div>
    );
};

export default Home;