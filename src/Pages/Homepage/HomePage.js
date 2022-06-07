import "./HomePage.css"
import { useRef } from "react";
import { Timer, Navibar } from "../../Components/index";

const HomePage = () => {
    const po = useRef();
    const ic = useRef();

    function reveal() {
        if (po.current.getBoundingClientRect().top < 450) {
            po.current.classList.add("active");
            ic.current.classList.add("active");
        }
    }

    window.addEventListener("scroll", reveal);

    return (
        <>
            <Navibar />
            <section id="main" className="main">
                <Timer />
                <div className="header">
                    <img className="my-name" alt="" />
                </div>
            </section>
            <section id="about" className="about">
                about
            </section>
            <section id="projects" className="projects">
                <div className="java-section">
                    <div ref={po} className="project-overviews">
                        <h1>This project is .................</h1>
                    </div>
                    <div ref={ic} className="image-container">
                        <img className="android-code-img" alt=""></img>
                        <img className="android-ex1" alt=""></img>
                        <img className="android-ex2" alt=""></img>
                    </div>
                </div>
                <div className="js-section">
                    <div className="image-container">

                    </div>
                </div>
            </section>
        </>
    );
}

export default HomePage;