import './Home.scss';

import AboutMe from '../../components/AboutMe/AboutMe';
import Stack from '../../components/Stack/Stack';


function Home() {
    return(
        <section className="home-page container container_page">
            <AboutMe></AboutMe>
            <Stack></Stack>
        </section>
    )
};

export default Home;