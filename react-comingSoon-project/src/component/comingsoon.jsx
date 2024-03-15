import { AiOutlineExclamationCircle } from "react-icons/ai";
import { FaTwitter } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import 'bootstrap/dist/css/bootstrap.min.css';
import './comingsoon.css';
import { useState } from "react";


const mailRegex = /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/;

const ComingSoon = () => {

    const [inputVal , setInputVal] = useState("");
    
    function clickHandle(){
        const xmark = document.getElementById('xmark');
        const mail = document.getElementById('mail');
        const resultOfMail = mailRegex.test(mail.value);
        if(resultOfMail == true){
            xmark.style.display = 'none';
            alert("email correct ✅")
        } else {
            xmark.style.display = 'block';
        }
    }

    function inputHandle(){
        const xmark = document.getElementById('xmark');
        const btn = document.getElementById('btn');
        const mail = document.getElementById('mail');
        const resultOfMail = mailRegex.test(mail.value);
        if(resultOfMail == true){
            xmark.style.display = 'none';
            setInputVal(EventTarget.value);
            btn.style.cursor = 'pointer';
            btn.style.backgroundColor = '#2A5555'
            btn.style.color = 'white';
        } else {
            xmark.style.display = 'block';
            setInputVal(EventTarget.value);
            btn.style.cursor = 'default';
            btn.style.backgroundColor = '#1E3B3B';
            btn.style.color = '#A9AAAA';
        }
    }

    return (
        <main className="container d-flex flex-column ml-0 pl-0">
            {console.log(inputVal)}
            <video autoPlay loop muted playsInline className='my-bg'>
                <source src='bg.mp4' type='video/mp4' />
            </video>
            <figure className='black-box'></figure>
            <i className="main-text">Our Website is <br/>Coming Soon</i>

            <section>
                <p className="detail-text">We're working hard to finish the development of <br/>
                    this site. Sign up below to receive updates and <br/>
                    to be notified when we launch!
                </p>
                
                <section className="d-felx">
                    <input value={inputVal} onChange={inputHandle} id='mail' type="email" autoComplete="off" placeholder="Enter email address..."/>
                    <AiOutlineExclamationCircle id="xmark" className="Exclamation"/>
                    <button onClick={clickHandle} id="btn" type="button" disabled={false}>NOTIFY ME!</button>
                </section>
                <nav className="d-flex flex-column">
                    <a href="https://www.twitter.com">
                        <FaTwitter className="twitter" />
                    </a>
                    <a href="https://www.facebook.com">
                        <FaFacebookF className="facebook" />
                    </a>
                    <a href="https://www.instagram.com">
                        <FaInstagram className="instagram" />
                    </a>
                </nav>
            </section>
        </main>
    )
}

export default ComingSoon