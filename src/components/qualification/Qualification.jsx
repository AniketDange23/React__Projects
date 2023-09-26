import './qualification.css'
import {useState} from "react";

const Qualification = () => {
    const [toggleState, setToggleState] = useState(1);
    const toggleTab = (index) => {
        setToggleState(index)
    }

    return (
        <section className="qualification section">
            <h2 className="section__title">Qualification</h2>
            <span className="section__subtitle">My Personal journey</span>
            <div className="qualification-container container">
                <div className="qualification-tabs">
                    <div
                        className={toggleState === 1 ? "qualification-button button--flex qulification-active" : "qualification-button button--flex"}>
                        <i className="uil uil-graduation-cap qualification-icon"></i>Eduction
                    </div>
                    <div
                        className={toggleState === 2 ? "qualification-button button--flex qulification-active" : "qualification-button button--flex"}>
                        <i className="uil uil-briefcase qualification-icon"></i>Experience
                    </div>
                </div>
                {/*  qualification*/}
                <div className="qualification-sections">
                    <div
                        className={toggleState === 1 ? "qualification-content qualification-content-active " : "qualification-content"}>
                        {/*first*/}
                        <div className="qualification-data">
                            <div>
                                <h3 className="qualification-title">Degree </h3>
                                <span
                                    className="qualification-subtitle"> GuruNanak Instituted of Technology - Nagpur</span>
                                <div className="qualification-calender">
                                    <i className="uil uil-calendar-alt"></i>2019-2022
                                </div>
                            </div>
                            <div>
                                <span className="qualification-rounder"> </span>
                                <span className="qualification-line"></span>
                            </div>
                        </div>
                        {/*    Second */}
                        <div className="qualification-data">
                            <div></div>
                            <div>
                                <span className="qualification-rounder"> </span>
                                <span className="qualification-line"></span>
                            </div>
                            <div>
                                <h3 className="qualification-title">Web Development </h3>
                                <span className="qualification-subtitle"> Skills Academy </span>
                                <div className="qualification-calender">
                                    <i className="uil uil-calendar-alt"></i>2022-2023
                                </div>
                            </div>

                        </div>
                        {/* four*/}
                        <div className="qualification-data">
                            <div>
                                <h3 className="qualification-title">Diploma </h3>
                                <p className="qualification-subtitle"> Govt.Polytechnic - Bramhapuri</p>
                                <span className="city">Bramhapuri</span>
                                <div className="qualification-calender">
                                    <i className="uil uil-calendar-alt"></i>2015-2019
                                </div>
                            </div>
                            <div>
                                <span className="qualification-rounder"> </span>
                                <span className="qualification-line"></span>
                            </div>
                        </div>

                        {/*    Five*/}
                        <div className="qualification-data">
                            <div></div>
                            <div>
                                <span className="qualification-rounder"> </span>
                                <span className="qualification-line"></span>
                            </div>
                            <div>
                                <h3 className="qualification-title">FrontEnd Development </h3>
                                <span className="qualification-subtitle"> FreeCodeCamp </span>
                                <div className="qualification-calender">
                                    <i className="uil uil-calendar-alt"></i>2022-2023
                                </div>
                            </div>

                        </div>


                    </div>

                </div>
            </div>
        </section>
    )
}
export default Qualification