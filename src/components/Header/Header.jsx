import './Header.scss';

import Logo from '../Logo/Logo';
import Navigation from '../Navigation/Navigation';

function Header() {
    return (
        <header className="app-header">
            <div className="container">
                <Logo/>
                <Navigation/>
            </div>
        </header>
    )
};

export default Header;