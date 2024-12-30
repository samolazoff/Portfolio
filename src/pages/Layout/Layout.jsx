import './Layout.scss';

import { Outlet } from 'react-router';

function Layout () {
    return(
        <div className="Layout">
            <Outlet/>
        </div>
    )
};

export default Layout;