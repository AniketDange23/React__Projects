import './services.css'
import {useState} from "react";

const Service = () => {
    const [toggleState, setToggleState] = useState(0);
    const toggleTab = (index) => {
        setToggleState(index);

    }
    return (
        <>
            <section className="services section" id="services">
                <h2 className="section__title">Services</h2>
                <span className="section__subtitle">What I offer</span>
                <div className="services_container container grid">
                    {/*content 1*/}
                    <div className="services_content">
                        <div>
                            <i className="uil uil-web-grid services_icon"></i>
                            <h3 className="services_title">Product <br/> Designer
                            </h3>
                        </div>
                        <span className="services_button" onClick={() => toggleTab(1)}>View More
<i className="uil uil-arrow-right"></i>
                        </span>
                        <div className={toggleState === 1 ? "services_model active-modal" : "services_model"}>
                            <div className="services_model-content">
                                <i onClick={() => toggleTab(0)}
                                   className="uil uil-times services_modal-close"></i>
                                <h3 className="services_modal-title">Product Designer</h3>
                                <p className="services_modal-description"> Services with more than 2 years of
                                                                           experience. Providing quality
                                                                           work to client and companies.</p>

                                <ul className="services_model-services grid">
                                    <li className="services_model-service">
                                        <i className="uil uil-check-circle services_modal-icon"></i>
                                        <p className="services_model-info">I develop the user Interface</p>
                                    </li>

                                    <li className="services_model-service">
                                        <i className="uil uil-check-circle services_modal-icon"></i>
                                        <p className="services_model-info">Web page development.
                                        </p>
                                    </li>

                                    <li className="services_model-service">
                                        <i className="uil uil-check-circle services_modal-icon"></i>
                                        <p className="services_model-info">I create ux element interactions.
                                        </p>
                                    </li>

                                    <li className="services_model-service">
                                        <i className="uil uil-check-circle services_modal-icon"></i>
                                        <p className="services_model-info">I position your company brand.
                                        </p>
                                    </li>

                                    <li className="services_model-service">
                                        <i className="uil uil-check-circle services_modal-icon"></i>
                                        <p className="services_model-info">Design and mockups of products for companies.
                                        </p>
                                    </li>

                                </ul>
                            </div>
                        </div>
                    </div>
                    {/*    content 2 */}
                    <div className="services_content">
                        <div>
                            <i className="uil uil-arrow services_icon"></i>
                            <h3 className="services_title">UI/UX<br/> Designer
                            </h3>
                        </div>
                        <span className="services_button" onClick={() => toggleTab(2)}>View More
<i className="uil uil-arrow-right"></i>
                        </span>

                        <div className={toggleState === 2 ? "services_model active-modal" : "services_model"}>

                            <div className="services_model-content">
                                <i onClick={() => toggleTab(0)} className="uil uil-times services_modal-close"></i>
                                <h3 className="services_modal-title">UI/UX Designer</h3>
                                <p className="services_modal-description"> Services with more than 2 years of
                                                                           experience. Providing quality
                                                                           work to client and companies.</p>

                                <ul className="services_model-services grid">
                                    <li className="services_model-service">
                                        <i className="uil uil-check-circle services_modal-icon"></i>
                                        <p className="services_model-info">I develop the user Interface</p>
                                    </li>

                                    <li className="services_model-service">
                                        <i className="uil uil-check-circle services_modal-icon"></i>
                                        <p className="services_model-info">Web page development.
                                        </p>
                                    </li>

                                    <li className="services_model-service">
                                        <i className="uil uil-check-circle services_modal-icon"></i>
                                        <p className="services_model-info">I create ux element interactions.
                                        </p>
                                    </li>

                                    <li className="services_model-service">
                                        <i className="uil uil-check-circle services_modal-icon"></i>
                                        <p className="services_model-info">I position your company brand.
                                        </p>
                                    </li>

                                    <li className="services_model-service">
                                        <i className="uil uil-check-circle services_modal-icon"></i>
                                        <p className="services_model-info">Design and mockups of products for companies.
                                        </p>
                                    </li>

                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="services_content">
                        <div>
                            <i className="uil uil-edit services_icon"></i>
                            <h3 className="services_title">Visual<br/> Designer
                            </h3>
                        </div>
                        <span className="services_button" onClick={() => toggleTab(3)}>View More
<i className="uil uil-arrow-right"></i>
                        </span>

                        <div className={toggleState === 3 ? "services_model active-modal" : "services_model"}>

                            <div className="services_model-content">
                                <i onClick={() => toggleTab(0)} className="uil uil-times services_modal-close"></i>
                                <h3 className="services_modal-title">Visual Designer</h3>
                                <p className="services_modal-description"> Services with more than 2 years of
                                                                           experience. Providing quality
                                                                           work to client and companies.</p>

                                <ul className="services_model-services grid">
                                    <li className="services_model-service">
                                        <i className="uil uil-check-circle services_modal-icon"></i>
                                        <p className="services_model-info">I develop the user Interface</p>
                                    </li>

                                    <li className="services_model-service">
                                        <i className="uil uil-check-circle services_modal-icon"></i>
                                        <p className="services_model-info">Web page development.
                                        </p>
                                    </li>

                                    <li className="services_model-service">
                                        <i className="uil uil-check-circle services_modal-icon"></i>
                                        <p className="services_model-info">I create ux element interactions.
                                        </p>
                                    </li>

                                    <li className="services_model-service">
                                        <i className="uil uil-check-circle services_modal-icon"></i>
                                        <p className="services_model-info">I position your company brand.
                                        </p>
                                    </li>

                                    <li className="services_model-service">
                                        <i className="uil uil-check-circle services_modal-icon"></i>
                                        <p className="services_model-info">Design and mockups of products for companies.
                                        </p>
                                    </li>

                                </ul>
                            </div>
                        </div>
                    </div>


                </div>
            </section>

        </>)
}

export default Service