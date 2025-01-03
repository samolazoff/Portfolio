import './FormForConection.scss';

function FormForConection() {
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
                        <input type="text" name="contactName" id="contactName"/>
                    </div>
                    <div className="box-input">
                        <label htmlFor="contactName">Contact's name</label>
                        <input type="text" name="contactName" id="contactName"/>
                    </div>
                    <div className="box-input">
                        <label htmlFor="contactName">Contact's name</label>
                        <input type="text" name="contactName" id="contactName"/>
                    </div>
                    <div className="box-input">
                        <label htmlFor="contactName">Contact's name</label>
                        <input type="text" name="contactName" id="contactName"/>
                    </div>
                    <button type="submit">Sent</button>
                </form>
            </div>
        </section>
    )
};

export default FormForConection;