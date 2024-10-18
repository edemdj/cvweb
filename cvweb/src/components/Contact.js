import React from 'react';

const Contact = () => {
    return (
        <div className="App page contact">
            <section id="contact">
                <h2>Contact</h2>
                <div className="contact-box">
                    <p>Adresse: [33000 BORDEAUX]</p>
                </div>
                <div className="contact-box">
                    <p>Numéro: [+33751156890]</p>
                </div>
                <div className="contact-box">
                    <p>Email: <a href="mailto:votre.email@example.com">votre.email@example.com</a></p>
                </div>
                <div className="contact-box">
                    <p>Site Web: <a href="http://votresiteweb.com">votresiteweb.com</a></p>
                </div>
            </section>
        </div>
    );
};

export default Contact;
