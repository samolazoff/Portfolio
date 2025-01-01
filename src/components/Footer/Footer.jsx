import './Footer.scss';

import { Link } from 'react-router';

import gitSVG from '../../static/icons/github.svg';
import instagramSVG from '../../static/icons/instagram.svg';
import linkdinSVG from '../../static/icons/linkedin.svg';

function Footer() {
    return(
        <footer className="app-footer">
            <div className="container">
                <Link to='https://github.com/samolazoff/Portfolio'>by @samolazoff</Link>
                <div className="block-media-links">
                    <Link to='https://github.com/samolazoff'>
                        <img src={gitSVG} alt="git" className="block-media-links__img"/>
                    </Link>
                    <Link to='https://www.instagram.com/'>
                        <img src={instagramSVG} alt="instagram" className="block-media-links__img"/>
                    </Link>
                    <Link to='https://www.linkedin.com/in/raman-samalazau-328470328/'>
                        <img src={linkdinSVG} alt="linkdin" className="block-media-links__img"/>
                    </Link>
                </div>
            </div>
        </footer>
    )
};

export default Footer;