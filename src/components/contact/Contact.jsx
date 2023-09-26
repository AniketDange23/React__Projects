import Send from "../../assets/Group 1.png";
import './contact.css'
import emailjs from '@emailjs/browser';
import React, {useRef} from 'react';


const Contact = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_wdz2uyp', 'template_we6kztg', form.current, 'GJ91k0LQ-Y-g0GTlZ')
        e.target.reset()
        console.log(emailjs)
    };
    return (
        <section className="contact section" id="container">
            <h2 className="section__title">Get in touch</h2>
            <span className="section__subtitle">Contact Me</span>

            <div className="contact_container container grid">
                <div className="contact_content">
                    <h3 className="contact_title">Talk to me</h3>
                    <div className="contact_info">
                        {/*  contact 1*/}
                        <div className="contact_card">
                            <i className="bx bx-envelope contact-card-icon"></i>
                            <h3 className="contact_card-title">Email</h3>
                            <span className="contact_card-data">aniketdange2321@gmail.com</span>
                            <a href="#" className="contact_button">write me
                                <i className="bx bx-right-arrow-alt contact_button-icon"></i>
                            </a>

                        </div>

                        {/*    contact 2 */}
                        <div className="contact_card">
                            <i className="bx bxl-whatsapp contact-card-icon"></i>
                            <h3 className="contact_card-title">Whatsapp</h3>
                            <span className="contact_card-data">9665540016</span>
                            <a href="#" className="contact_button">write me
                                <i className="bx bx-right-arrow-alt contact_button-icon"></i>
                            </a>

                        </div>
                        {/*    contact 3*/}
                        <div className="contact_card">
                            <i className="bx bxl-linkedin contact-card-icon"></i>
                            <h3 className="contact_card-title">LinkedIn</h3>
                            <span className="contact_card-data">Aniket Dange</span>
                            <a href="https://www.linkedin.com/in/aniket-dange/" className="contact_button">Write me
                                <i className="bx bx-right-arrow-alt contact_button-icon"></i>
                            </a>

                        </div>
                    </div>
                </div>
                <div className="contact_content">
                    <h3 className="contact_title">Write me your project</h3>

                    <form className="contact_form" ref={form} onSubmit={sendEmail}>
                        <div className="contact_form-div">
                            <lable className="contact_form-tag">Name</lable>
                            <input
                                type="text"
                                name="name"
                                className="contact_from-input"
                                placeholder="Enter your name"
                            />
                        </div>
                        <div className="contact_form-div ">
                            <lable className="contact_form-tag ">Mail</lable>
                            <input
                                type="email"
                                name="email"
                                className="contact_from-input"
                                placeholder="Enter your email"
                            />
                        </div>
                        <div className="contact_form-div contact_from-area">
                            <lable className="contact_form-tag">Project</lable>
                            <textarea
                                id=""
                                cols="30"
                                rows="10"
                                name="projects"
                                className="contact_from-input"
                                placeholder="Enter your project"
                            />
                        </div>
                        <button className="button button--flex" style={{height: 50,}}>Send <img src={Send} style={{
                            width: 30,
                            marginLeft: 20
                        }} alt="send" className="send"/></button>
                    </form>
                </div>

            </div>
        </section>
    )
}
export default Contact