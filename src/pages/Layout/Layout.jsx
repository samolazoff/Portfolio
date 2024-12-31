import './Layout.scss';

import { Outlet } from 'react-router';

function Layout () {
    return(
        <>
            <header className="app-header"></header>
            <main className='app-main'>
                <Outlet/>
            </main>
            <footer className="app-footer"></footer>
        </>
    )
};

export default Layout;