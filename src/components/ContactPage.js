import React from 'react';
import { Parallax } from 'react-scroll-parallax';

const ContactPage = () => (
    <Parallax className="page" y={[-20, 20]} tagOuter="figure">
        <div className="contact-page">
            <h2>Contact Karl Savinskiy</h2>
            <p>If you have any questions or would like to discuss a project, feel free to reach out to me:</p>

            <div className="contact-info">
                <p>Email: karlsavinskiy@gmail.com</p>
                <p>Phone: (929) 314-7111</p>
                {/* Add more contact details or social links if necessary */}
            </div>

            <form className="contact-form">
                <label htmlFor="name">Name</label>
                <input type="text" id="name" name="name" />

                <label htmlFor="email">Email</label>
                <input type="email" id="email" name="email" />

                <label htmlFor="message">Message</label>
                <textarea id="message" name="message"></textarea>

                <button type="submit">Send Message</button>
            </form>
        </div>
    </Parallax>
);

export default ContactPage;
