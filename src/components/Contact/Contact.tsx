import React, { useRef } from 'react'
import emailjs from '@emailjs/browser';
import "./Contact.scss"

export default function Contact (){
    const form = useRef(null)

    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm('service_ywf3uip', 'template_ydvo0vu', form.current!, '25NKTP8lP4cPaNlzv')
          .then((result) => {
              console.log(result.text);
          }, (error) => {
              console.log(error.text);
          });
          e.target.reset()
      };

    return(
        <div className="all-contact-form-container">
            <h2 className="contact-title">Contactanos</h2>
            <form ref={form} onSubmit={sendEmail} className="contact-form">
                <div className="contact-form-input-container">
                    <input type="text" name="user_name" placeholder="Nombre" required className="contact-form-input"/>
                    <label className="contact-label">Nombre</label> 
                </div>
                <div className="contact-form-input-container">
                    <input type="email" name="user_email" required className="contact-form-input"/>
                    <label className="contact-label">E-mail</label>
                </div>
                <div className="contact-form-input-container">
                    <input type="text" name="asunto" required className="contact-form-input"/>
                    <label className="contact-label">Asunto a consultar</label>
                </div>
                <div className="contact-textarea-btn-container">
                    <textarea name="mensaje" cols={30} rows={10} className="contact-text-area"></textarea>
                    <label className="text-area-label">Escribe aqui tu mensaje</label>
                    <button type="submit" className="contact-submit-btn">Enviar</button>
                </div>
            </form>
        </div>
    )
}