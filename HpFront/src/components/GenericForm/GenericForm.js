// si on décide d'utiliser emailjs
// https://dev.to/daliboru/how-to-send-emails-from-a-form-in-react-emailjs-27d1

import { useState } from 'react';
import './GenericForm.css';

const GenericForm = ({ props }) => {
    const [message, setMessage] = useState('');
    const { toSend, setToSend, email, subject, redirect } = props;
    const items = Object.keys(toSend);

    const handleChange = (e) => {
        setToSend({ ...toSend, [e.target.name]: e.target.value });
    };

    const handleMessage = (e) => {
        setMessage(e.target.value);
    }

    return (
        <form className="generic-form"
            action={`https://formsubmit.co/${email}`} method="POST">
            <input type="hidden" name="_subject" value={subject} />
            <input type="hidden" name="_next" value={redirect} />
            <input type="hidden" name="_template" value="table" />
            {/* <input type="hidden" name="_captcha" value="false"/> */}
            {
                items.map((item, index) => (
                    <div className="mapped-input" key={`formKey-${index}`}>
                        <label htmlFor={item} className='input-label'>{`Votre ${item}:`}</label>
                        <input
                            type='text'
                            name={item}
                            id={item}
                            placeholder={item}
                            value={toSend[item]}
                            onChange={handleChange}
                            required
                        />
                    </div>
                ))
            }
            <div className="form-message">
                <label htmlFor='message'>Votre message: </label>
                <textarea
                    name='message'
                    id='message'
                    cols='50'
                    rows='10'
                    placeholder='Votre message ici :)'
                    value={message}
                    onChange={handleMessage}
                    required
                />
            </div>
            <button type='submit' onClick={() => (console.log('clické!'))}>Envoyer !</button >
        </form>
    );
}

export default GenericForm;