import './Layout.scss';

import { Outlet } from 'react-router';

import Header from '../../components/Header/Header';

function Layout () {
    return(
        <>
            <Header/>
            <main className='app-main'>
                <Outlet/>
            </main>
            <footer className="app-footer"></footer>
        </>
    )
};

export default Layout;