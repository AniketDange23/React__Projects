import Hand from '..//../assets/Waving Hand Light Skin Tone.png'
import Send from '..//../assets/Group 1.png'

const Data = () => {
    return (
        <>
            <div className="home__data">
                <h1 className="home__title">Aniket Dange <img src={Hand} className="home__hand" alt="hand"/>
                </h1>
                <h3 className="home__subtitle">Front End Developer</h3>
                <p className="home__description">Dedicated frontend developer obsessing over user-centric excellence.
                                                 Turning designs into intuitive, responsive web experiences. Empowering
                                                 brands with seamless, efficient, and delightful digital solutions</p>
                <a href="#ss" className="button button--flex" style={{height: 50,}}>Say Hello <img src={Send} style={{
                    width: 30,
                    marginLeft: 20
                }} alt="send" className="send"/></a>
            </div>
        </>
    )
}
export default Data
