import React from 'react';
import Header from './components/Header/Header';
import { Outlet } from 'react-router';
import Footer from './components/Header/Footer/Footer';

function Layout() {
    return (
        <>
            <Header />
            <Outlet />  {/* this helps to remain this conent same as it is*/}
            <Footer />
        </>
    );
}

export default Layout;