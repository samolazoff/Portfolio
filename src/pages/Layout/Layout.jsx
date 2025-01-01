import './Layout.scss';

import { Outlet } from 'react-router';

import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';

function Layout () {
    return(
        <>
            <Header/>
            <main className='app-main'>
                <Outlet/>
            </main>
            <Footer/>
        </>
    )
};

export default Layout;