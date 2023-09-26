const ScrollDown = () => {
    return (
        <>
            <div className="home__scroll">
                <a href="#About" className="home_scroll-button button--flex">
                    <svg xmlns="http://www.w3.org/2000/svg" width="38" className="home__scroll-mouse" height="38"
                         viewBox="0 0 24 24">
                        <path className="wheel" fill="#001110"
                              d="M11.25 10a.75.75 0 0 0 1.5 0V7a.75.75 0 0 0-1.5 0v3Z"/>
                        <path fill="#001110" fill-rule="evenodd"
                              d="M18.75 9.074a6.75 6.75 0 0 0-13.5 0v5.852a6.75 6.75 0 0 0 13.5 0V9.074Zm-5.931-5.186a5.25 5.25 0 0 1 4.431 5.186v5.852a5.25 5.25 0 0 1-10.5 0V9.074a5.25 5.25 0 0 1 6.069-5.186Z"
                              clip-rule="evenodd"/>
                    </svg>
                    <span className="home__scroll-name">Scroll Down</span>
                    <i class="uil uil-arrow-down home__scroll-arrow"></i>
                </a>
            </div>
        </>
    )
}
export default ScrollDown
