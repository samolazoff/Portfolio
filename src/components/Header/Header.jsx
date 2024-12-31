import './Header.scss';

import Logo from '../Logo/Logo';

function Header() {
    return (
        <header className="app-header">
            <div className="container">
                <Logo/>
                <nav className="app-header-nav">
                    <ul>
                        <li>
                            <a href=""></a>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    )
};

export default Header;