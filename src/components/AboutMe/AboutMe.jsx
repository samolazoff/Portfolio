import './AboutMe.scss';

import { useSelector } from 'react-redux';

import imgBgc from '../../static/svg/pixeltrue-web-development-1.svg';
import iconHello from '../../static/icons/waving-hand-svgrepo-com.svg';
import iconSmile from '../../static/icons/happy-emoji-svgrepo-com.svg';
import iconWink from '../../static/icons/wink-svgrepo-com.svg';


function AboutMe() {

    const dataUsual = useSelector((state) => state.language.data.home.txt.usual);
    const dataImportant = useSelector((state) => state.language.data.home.txt.important);
    const dataTitle = useSelector((state) => state.language.data.home.title);
    const dataBtn = useSelector((state) => state.language.data.home.txt.btn);

    return(
        <>
            <section className="about-me">
                <div className="about-me-txt">
                    <h2 className="title-block">{dataTitle}</h2>
                    <span>
                    {dataUsual[0]}
                        <img className="smile-in-txt" src={iconHello} alt="hello" />
                    </span>
                    <span>
                    {dataUsual[1]} <span className="about-me-txt_important">{dataImportant[0]}</span>{dataUsual[2]}
                        <img className="smile-in-txt" src={iconSmile} alt="smile" />
                    </span>
                    <span>{dataUsual[3]}
                    <span className="about-me-txt_important"> "{dataImportant[1]}"</span>
                    {dataUsual[4]}</span>
                    <span>{dataUsual[5]}
                        <img className="smile-in-txt" src={iconWink} alt="wink" />
                    </span>
                    <span className="btn btn_important">{dataBtn}</span>
                </div>
                <img src={imgBgc} alt="about-me" className="about-me_img" />
            </section>
        </>
    )
};

export default AboutMe;