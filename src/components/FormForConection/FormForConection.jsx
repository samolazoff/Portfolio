import { useState } from 'react';
import './FormForConection.scss';


function FormForConection() {

    const [value, setValue] = useState('');

    const options = [
        {label: "Mobile Phon", value: "phone"},
        {label: "Email", value: "email"},
        {label: "Skype", value: "skype"},
        {label: "Another way", value: "anotherWay"}
    ];

    function handelSelect(event){
        setValue(event.target.value)
    }

    function yuf(value){
        switch (value) {
            case 'phone':
               return(
                    <div className="box-input">
                        <label htmlFor="contactPhone">Your contact phone number</label>
                        <input type="phone" name="contactPhone" id="contactPhone" required/>
                    </div>
                    );
            case 'email':
                return(
                    <div className="box-input">
                        <label htmlFor="contactMail">Your contact email</label>
                        <input type="email" name="contactMail" id="contactMail" required/>
                    </div>
                );
            case 'skype':
                return(
                    <div className="box-input">
                        <label htmlFor="contactSkype">Your contact Skypel</label>
                        <input type="text" name="contactSkype" id="contactSkype" required/>
                    </div>
                );
            case 'anotherWay':
                return(
                    <div className="box-input">
                        <label htmlFor="contactPhone">Specify another way</label>
                        <input type="text" name="contactPhone" id="contactPhone" required/>
                    </div>
                )
            default:
                return(
                    <div className="box-input">
                        <label htmlFor="contactPhone">Your contact phone number</label>
                        <input type="phone" name="contactPhone" id="contactPhone" required/>
                    </div>
                )
        }
    }

    return(
        <section className="block-connect">
            <h2 className="title-block">Connection with me</h2>
            <div className="block-connect-wrap">
                <p className="block-connect-wrap__txt">
                    You can use this form to contact me quickly.
                    Please send your request and I will contact you in a way that is convenient for you. 
                </p>
                <form className='form-connection' method="post">
                    <div className="box-input">
                        <label htmlFor="contactName">Contact's name</label>
                        <input type="text" name="contactName" id="contactName" required/>
                    </div>
                    <div className="box-input">
                        <label htmlFor="bestContact">The best way for contact with you</label>
                        <select name="bestContact" id="bestContact" onChange={handelSelect}>
                            {
                                options.map (option => 
                                    (
                                        <option value={option.value} key={option.value}>{option.label}</option>
                                    )
                                )
                            }
                           
                        </select>
                        {
                            yuf(value)
                        }
                    </div>
                   
                    <button type="submit">Sent</button>
                </form>
            </div>
        </section>
    )
};

export default FormForConection;