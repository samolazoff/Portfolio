import './Contacts.scss';

import {Link} from 'react-router';

import FormForConection from '../../components/FormForConection/FormForConection';

const Contacts = () => {
    return (
        <section className='page-contacts container container_page'>
            <FormForConection></FormForConection>
            <div className="page-contacts-box">
                <div className="contact-box">
                    <img src="" alt="" className="contact-box__img" />
                    <address>
                        <Link to='mailto:samolazov.roman.alex@gmail.com'>samolazov.roman.alex@gmail.com</Link>
                    </address>
                </div>
                <div className="contact-box">
                    <img src="" alt="" className="contact-box__img" />
                    <address>
                        <Link to='tel:+375445576259'>+375445576259</Link>
                    </address>
                </div>
            </div>
        </section>
    );
};

export default Contacts;