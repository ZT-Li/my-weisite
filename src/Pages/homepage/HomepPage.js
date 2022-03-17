import "./HomePage.css"
import Typewriter from "typewriter-effect";
import { Timer, Slides } from "../../Components/index";


const HomePage = () => {

    return (
        <div className="homepage">
            <Timer />
            <div className="header">
                <h1 className="my-name">
                    Zhuotang Li
                </h1>
                <div className="caption">
                    <Typewriter
                        options={{
                            strings: ["Know it", "means", "Own it"],
                            autoStart: true,
                            loop: true,
                            cursor: "",
                            delay: 85,
                        }} />
                </div>
            </div>
            <Slides />
        </div>
    );
}

export default HomePage;