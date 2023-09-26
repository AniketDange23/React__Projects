import './footer.css'
import React from "react";


const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer_container container">
                <h2 className="footer_title">Aniket</h2>
                <ul className="footer_list">
                    <li>
                        <a href="#about" className="footer_link">About</a>
                    </li>
                    <li>
                        <a href="#projects" className="footer_link">Projects</a>
                    </li>
                    <li>
                        <a href="#testimonial" className="footer_link">Testimonials</a>
                    </li>
                </ul>

                <div className="footer_social">
                    <a href="https://www.linkedin.com/in/aniket-dange/" className="footer_social-link" target="_blank">
                        <i className="bx bxl-linkedin"></i> </a>
                    <a href="https://www.behance.net/aniketdange1" className="footer_social-link" target="_blank">
                        <i className="bx bxl-behance"></i> </a>
                    <a href="https://github.com/AniketDange23" className="footer_social-link" target="_blank">
                        <i className="bx bxl-github"></i> </a>
                    <a href="https://github.com/AniketDange23" className="footer_social-link" target="_blank">
                        <i className="bx bxl-instagram"></i> </a>
                    <a href="https://github.com/AniketDange23" className="footer_social-link" target="_blank">
                        <i className="bx bxl-twitter"></i> </a>
                </div>
                <span className="footer_copyright">
 &#169; AniketDange. All rights Reserved
            </span>
            </div>
        </footer>
    )
}

export default Footer