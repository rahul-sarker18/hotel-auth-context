import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../components/Footer';
import Header from '../components/Header';

const Main = () => {
    return (
        <div>
            <div  style={{minHeight :'90vh'}}>
            <Header></Header>
            <Outlet></Outlet>
            </div>
           <div className='mt-8'> <Footer></Footer></div>
        </div>
    );
};

export default Main;