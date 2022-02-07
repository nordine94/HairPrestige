// si on décide d'utiliser emailjs
// https://dev.to/daliboru/how-to-send-emails-from-a-form-in-react-emailjs-27d1

import { useState } from 'react';
import './GenericForm.css';

const GenericForm = ({ toSend, setToSend, email }) => {
    const items = Object.keys(toSend);

    const handleChange = (e) => {
        setToSend({ ...toSend, [e.target.name]: e.target.value });
    };

    return (
        <form className="generic-form"
            action={`https://formsubmit.co/${email}`} method="POST">
            <input type="hidden" name="_subject" value="Mail reçu depuis le site web Hair Prestige !" />
            <input type="hidden" name="_next" value="http://localhost:3000" />
            <input type="hidden" name="_template" value="table" />
            {
                items.map((item, index) => (
                    <input
                        key={`formKey-${index}`}
                        type='text'
                        name={item}
                        placeholder={item}
                        value={toSend[item]}
                        onChange={handleChange}
                    />
                ))
            }
            <button type='submit'>Envoyer !</button >
        </form>
    );
}

export default GenericForm;