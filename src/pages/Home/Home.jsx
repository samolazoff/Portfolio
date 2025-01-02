import './Home.scss';

import AboutMe from '../../components/AboutMe/AboutMe';


function Home() {
    return(
        <section className="home-page container container_page">
            <AboutMe></AboutMe>
        </section>
    )
};

export default Home;