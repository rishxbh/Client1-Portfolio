import { useRef, useState } from 'react'
import './contact.css'
import instagram from '../../assets/instagram.png'
import mail from '../../assets/mail.png'
import linkedin from '../../assets/linkedin.png'
import emailjs from '@emailjs/browser';

const Contact = () => {
    const form = useRef();
    const [inputName, setInputName] = useState('');
    const [inputEmail, setInputEmail] = useState('');
    const [inputMessage, setInputMessage] = useState('');
    const success = useRef();
    const danger = useRef();
    const message = useRef();
    const contact = useRef();
    const submit = (e) => {
        e.preventDefault();
        if (inputName === '' || inputEmail === '' || inputMessage === '') {
            danger.current.style.display = 'block';
            message.current.style.display = 'flex';
            contact.current.style.filter = 'blur(5px)';
            message.current.style.filter = 'none';
            const timer = setTimeout(() => {
                danger.current.style.display = 'none';
                message.current.style.display = 'none';
                contact.current.style.filter = 'none';
            }, 3000);
            return () => clearTimeout(timer);
        } else {
            danger.current.style.display = 'none';
            message.current.style.display = 'none';
            sendEmail(e);
        }
    }
    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_x8mol9t', 'template_p9kahrk', form.current, '7WiWZ2EIYw2qTWj1V')
            .then((result) => {
                success.current.style.display = 'block'
                message.current.style.display = 'flex';
                contact.current.style.filter = 'blur(5px)';
                message.current.style.filter = 'none';
                setInputName('')
                setInputEmail('')
                setInputMessage('')
                console.log(result.text);
                const timer = setTimeout(() => {
                    success.current.style.display = 'none';
                    message.current.style.display = 'none';
                    contact.current.style.filter = 'none';
                }, 3000);
                return () => clearTimeout(timer);
            }, (error) => {
                console.log(error.text);
            });
        // setInputName = ''
        // setInputEmail = ''
        // setInputMessage = ''
    };
    return (
        <div id="contact">
            <div ref={message} className="message">
                <div ref={success} className="success">Thank you, will connect soon!</div>
                <div ref={danger} className="danger">Fields can't be empty</div>
            </div>
            <section className='contact' ref={contact}>
                {/* <div className='letsConnect'>
            <h5></h5>
        </div> */}
                <span className="desc">Let's Write Your Story Together</span>
                <form action="" className="form" ref={form} onSubmit={submit}>
                    <div className="input-group">
                        <label>Name</label>
                        <input onChange={e => setInputName(e.target.value)} type="text" value={inputName} className='namefill' name='from_name' />
                    </div>
                    <div className="input-group">
                        <label>Email</label>
                        <input onChange={e => setInputEmail(e.target.value)} type="email" value={inputEmail} className='mail' name='from_email' />
                    </div>
                    <div className="input-group">
                        <label>Message</label>
                        <textarea onChange={e => setInputMessage(e.target.value)} rows="5" value={inputMessage} className='msg' name='message'></textarea>
                    </div>
                    <button className="submit" type='submit' value='Send'>Submit</button>
                </form>
                <div className="links">
                    <a href='mailto:chauhanritika0411@gmail.com' target='#' ><img src={mail} alt="email" srcset="" className='social-link' /></a>
                    <a href='https://www.linkedin.com/in/ritika-chauhan-413413226/' target='#'><img src={linkedin} alt="linkedin" srcset="" className='social-link' /></a>
                    <a href='https://www.instagram.com/contentnaari' target='#'><img src={instagram} alt="instagram" srcset="" className='social-link' /></a>
                </div>
            </section>
        </div>
    )
}

export default Contact