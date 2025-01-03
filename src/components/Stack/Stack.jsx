import './Stack.scss';

import imgHtml from '../../static/icons/html-5.svg';

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
        }
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