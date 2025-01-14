import './Portfolio.scss';

import imgSite from '../../static/img/Screenshot from 2025-01-14 19-50-59.png';

import {Link} from 'react-router';

const Portfolio = () => {
    return (
        <section className="page-portfolio container container_page">
            <h2 className="title-block">Portfolio</h2>
            <div className="page-portfolio-box">
                <h3 className="page-portfolio-box__title">Example projects</h3>
                <Link className="page-portfolio-box-project" to='/'>
                    <img src={imgSite} alt="img site" className="project__img" />
                    <div className="project-description">
                        <h4 className="project__name">Project name</h4>
                        <p className="project__description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis, adipisci.</p>
                    </div>
                </Link>
            </div>
            <div className="page-portfolio-box">
                <h3 className="page-portfolio-box__title">Comertion projects</h3>
                <Link className="page-portfolio-box-project" to='/'>
                    <img src={imgSite} alt="img site" className="project__img" />
                    <div className="project-description">
                        <h4 className="project__name">Project name</h4>
                        <p className="project__description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis, adipisci.</p>
                    </div>
                </Link>
            </div>
            <div className="page-portfolio-box">
                <h3 className="page-portfolio-box__title">Student projects</h3>
                <Link className="page-portfolio-box-project" to='/'>
                    <img src={imgSite} alt="img site" className="project__img" />
                    <div className="project-description">
                        <h4 className="project__name">Project name</h4>
                        <p className="project__description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis, adipisci.</p>
                    </div>
                </Link>
            </div>
        </section>
    );
};

export default Portfolio;