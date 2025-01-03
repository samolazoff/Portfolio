import './Home.scss';

import AboutMe from '../../components/AboutMe/AboutMe';
import Stack from '../../components/Stack/Stack';
import FormForConection from '../../components/FormForConection/FormForConection';

function Home() {
    return(
        <section className="home-page container container_page">
            <AboutMe></AboutMe>
            <Stack></Stack>
            <FormForConection></FormForConection>
        </section>
    )
};

export default Home;