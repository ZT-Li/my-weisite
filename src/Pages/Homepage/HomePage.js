import "./HomePage.css"
import { Timer, Slides, Navibar, MouseEffects } from "../../Components/index";

const HomePage = () => {

    return (
        <>
            <MouseEffects />
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
                <Slides />
            </section>
        </>
    );
}

export default HomePage;