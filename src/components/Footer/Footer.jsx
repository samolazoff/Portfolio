import './Footer.scss';

import { Link } from 'react-router';

import BlockMediaLinks from '../BlockMediaLinks/BlockMediaLinks';

function Footer() {
    return(
        <footer className="app-footer">
            <div className="container">
                <Link to='https://github.com/samolazoff/Portfolio'>by @samolazoff</Link>
                <BlockMediaLinks></BlockMediaLinks>
            </div>
            {/* Illustration by <a href="https://icons8.com/illustrations/author/ARh4OKrFtdfC">Pixeltrue Ouch!</a> */}
        </footer>
    )
};

export default Footer;