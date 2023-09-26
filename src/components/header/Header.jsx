import './header.css'
import {useState} from "react";

const Header = () => {
    // =========== change background ===========

    window.addEventListener("scroll", function () {
        const header = document.querySelector(".header");
        // when the scroll is higher than 560 viewport  height, add the show-scroll class to a tag with the scroll
        if (this.scrollY >= 80) header.classList.add("scroll-header");
        else header.classList.remove("scroll-header")

    });
    // =========== Toggle menu ===========

    const [toggle, showMenu] = useState(false);
    const [activeNav, setActiveNav] = useState("#home")
    return (
        <header className="header">
            <nav className="nav container">
                <a href="index.html" className="nav__logo">Aniket </a>
                <div className={toggle ? "nav__menu show_menu" : "nav__menu"}>
                    <ul className="nav__list grid">
                        {/*home*/}
                        <li className="nav__item">
                            <a href="#home" onClick={() => setActiveNav('#home')}
                               className={activeNav === '#home' ? "nav__link active-link" : "nav__link "}>
                                <i className="uil uil-estate nav__icon"></i>Home
                            </a>
                        </li>
                        {/*About */}
                        <li className="nav__item">
                            <a href="#about" onClick={() => setActiveNav('#about')}
                               className={activeNav === '#about' ? "nav__link active-link" : "nav__link "}>
                                <i className="uil uil-estate nav__icon"></i>About
                            </a>
                        </li>
                        {/*skills*/}
                        <li className="nav__item">
                            <a href="#skills" onClick={() => setActiveNav('#skills')}
                               className={activeNav === '#skills' ? "nav__link active-link" : "nav__link "}>
                                <i className="uil uil-estate nav__icon"></i>Skills
                            </a>
                        </li>
                        {/*    services*/}
                        <li className="nav__item">
                            <a href="#service" onClick={() => setActiveNav('#services')}
                               className={activeNav === '#services' ? "nav__link active-link" : "nav__link "}>
                                <i className="uil uil-estate nav__icon"></i>Services
                            </a>
                        </li>
                        {/*    Portfolio     */}
                        <li className="nav__item">
                            <a href="#portfolio" onClick={() => setActiveNav('#portflio')}
                               className={activeNav === '#portflio' ? "nav__link active-link" : "nav__link "}>
                                <i className="uil uil-estate nav__icon"></i>Portfolio
                            </a>
                        </li>
                        {/*    contact        */}

                        <li className="nav__item">
                            <a href="#contact" onClick={() => setActiveNav('#contact')}
                               className={activeNav === '#contact' ? "nav__link active-link" : "nav__link "}>
                                <i className="uil uil-estate nav__icon"></i>Contact
                            </a>
                        </li>
                    </ul>
                    <i className="uil uil-times nav__close" onClick={() => showMenu(!toggle)}></i>

                </div>
                <div className="nav__toggle" onClick={() => showMenu(!toggle)}>
                    <i className="uil uil-apps"></i>
                </div>

            </nav>

        </header>
    )
}
export default Header