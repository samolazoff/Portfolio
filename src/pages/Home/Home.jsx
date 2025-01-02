import './Home.scss';

import imgBgc from '../../static/svg/pixeltrue-web-development-1.svg';
import iconHello from '../../static/icons/waving-hand-svgrepo-com.svg';
import iconSmile from '../../static/icons/happy-emoji-svgrepo-com.svg';

function Home() {
    return(
        <section className="home-page container container_page">
            <div className="about-me">
                <h2 className="title-block">About me</h2>
                <p className="about-me-txt">
                   <span>
                        Hello friends
                        <img className="smile-in-txt" src={iconHello} alt="hello" />
                   </span>
                   <span>
                        My name is <span className="about-me-txt_important">Roman</span>. Nice to meet you.
                        <img className="smile-in-txt" src={iconSmile} alt="smile" />
                    </span>
                   <span>I am a web developer and represent the web studio
                    <span className="about-me-txt_important"> "Samolazoff"</span>
                        . I've got a lot of experience in both  front-end and the backend.</span>
                   <span>If you need to create a wonderful website, I will be very happy to help you!</span>
                   <span className="btn btn_important">We'll Go for it!</span>
                </p>
            </div>
            <img src={imgBgc} alt="about-me" className="about-me" />
        </section>
    )
};

export default Home;