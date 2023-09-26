const Backend = () => {
    return (
        <div className="skills_content">
            <h3 className="skills_title"> Frontend Developer</h3>
            <div className="skills_box">
                {/*   Group 1*/}
                <div className="skills_group">
                    <div className="skills_data">
                        <i className="bx bxl-nodejs"></i>
                        <div>
                            <h3 className="skills_name">Node Js</h3>
                            <span className="skills_level">Basic</span>
                        </div>
                    </div>

                    <div className="skills_data">
                        <i className="bx bxl-firebase"></i>
                        <div>
                            <h3 className="skills_name">Firebase</h3>
                            <span className="skills_level">Basic</span>
                        </div>
                    </div>

                    <div className="skills_data">
                        <i className="bx bx-code"></i>
                        <div>
                            <h3 className="skills_name">Express</h3>
                            <span className="skills_level">Intermediate</span>
                        </div>
                    </div>
                </div>

                {/*    group 2*/}
                <div className="skills_group">
                    <div className="skills_data">
                        <i className="bx bxl-mongodb"></i>
                        <div>
                            <h3 className="skills_name">MongoDB</h3>
                            <span className="skills_level">Basic</span>
                        </div>
                    </div>

                    <div className="skills_data">
                        <i className="bx bxs-data"></i>
                        <div>
                            <h3 className="skills_name">My SQL</h3>
                            <span className="skills_level">Basic</span>
                        </div>
                    </div>


                </div>

            </div>
        </div>

    )
}
export default Backend