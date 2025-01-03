import './Stack.scss';


import imgHtml from '../../static/icons/html-5.svg';
import imgJs from '../../static/icons/js.svg';
import imgCss from '../../static/icons/css-3-svgrepo-com.svg';
import imgReact from '../../static/icons/react-svgrepo-com.svg';
import imgNode from '../../static/icons/nodejs-svgrepo-com.svg';
import imgRedux from '../../static/icons/redux-svgrepo-com.svg';
import imgFigma from '../../static/icons/figma-svgrepo-com.svg';
import imgSass from '../../static/icons/sass-svgrepo-com.svg';
import imgPug from '../../static/icons/pug-svgrepo-com.svg';
import imgNpm from '../../static/icons/npm-svgrepo-com.svg';
import imgMongo from '../../static/icons/mongo-svgrepo-com.svg';
import imgBoots from '../../static/icons/bootstrap-svgrepo-com.svg';
import imgTail from '../../static/icons/tailwind-svgrepo-com.svg';
import imgGit from '../../static/icons/git-svgrepo-com.svg';

function itemStack(name, img) {
    return(
        <li className="item">
            <img src={img} alt={name} title={name}/>
        </li>
    )
};

function Stack() {
   
    const imgArr = [
        {
            name: 'Html5',
            img: imgHtml
        },
        {
            name: 'CSS3',
            img: imgCss
        },
        {
            name: 'JS',
            img: imgJs
        },
        {
            name: 'ReactJs',
            img: imgReact
        },
        {
            name: 'NodeJs',
            img: imgNode
        },
        {
            name: 'Redux',
            img: imgRedux
        },
        {
            name: 'Figma',
            img: imgFigma
        },
        {
            name: 'Sass',
            img: imgSass
        },
        {
            name: 'Pug',
            img: imgPug
        },
        {
            name: 'npm',
            img: imgNpm
        },
        {
            name: 'MongoDB',
            img: imgMongo
        },
        {
            name: 'Bootstrap',
            img: imgBoots
        },
        {
            name: 'Tailwind',
            img: imgTail
        },
        {
            name: 'Git',
            img: imgGit
        },
    ];
    return(
        <section className='stack'>
            <h2 className="title-block">Technology stack</h2>
            <ul className="stack-items">
                {
                    imgArr.map((item) => {
                        return (
                            itemStack(item.name, item.img)
                        )
                    })
                }
                
            </ul>

        </section>
    )
};

export default Stack;