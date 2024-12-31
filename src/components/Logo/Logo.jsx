import './Logo.scss';

import { Link } from 'react-router';

function Logo() {
    return(
        <Link to={'/'} className='logo'>
            <h1>Samolazoff</h1>
        </Link>
    )
};

export default Logo;
