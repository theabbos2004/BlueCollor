import React from 'react';
import Header from './component/header';
import Intro from './component/intro';
import Navbor from './component/navbor';

import Opening from './component/opening';
import Provide from './component/provide';
import MainServices from './component/mainServices';
import OurServices from './component/ourservices';
import ChooseUS from './component/chooseUS';
import RecentProjects from './component/recentProjects';
import Customer from './component/customer';
import Price from './component/price';
import Update from './component/update';
import Subscribe from './component/subscribe';
import Footer from './component/footer';
const App = () => {
    return (
        <div>
            <Opening/>
            <Header/>
            <Navbor/>   
            <Intro/>
            <Provide/>
            <MainServices/>
            <OurServices/>
            <ChooseUS/>
            <RecentProjects/>
            <Customer/>
            <Price/>
            <Update/>
            <Subscribe/>
            <Footer/>
        </div>
    );
}

export default App;
