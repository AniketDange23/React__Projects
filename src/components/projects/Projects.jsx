import './project.css'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Data from "./Data";
import React from "react";


const Projects = () => {
    return (
        <>
            <section className="section container section" id="project">
                <h3 className="section__title">Project Gallery</h3>
                <p className="section__subtitle">My projects</p>
                <div className="project_content grid">
                    {Data.map(({id, image, title, subtitle}) => {
                        return (
                            <div className="project_card" key={id}>
                                <img src={image} alt="project-1"/>
                                <h5 className="project_card_title">React</h5>
                                <span className="project_card_subtitle">{subtitle}</span> <br/>
                                <div className="project_card_btn">
                                    <button>View<i className="uil uil-eye"></i> <a
                                        href="https://nike-shoes-store.netlify.app"/></button>
                                    <button>Code <i className="uil uil-arrow"> <a href=""/> </i></button>
                                </div>


                            </div>
                        )
                    })}

                </div>
            </section>

        </>
    )
}
export default Projects



