import "./HomePage.css"
import Typewriter from "typewriter-effect";
import { Timer, Slides, Navibar } from "../../Components/index";


const HomePage = () => {

    return (
        <>

            <Navibar />
            <div className="body-view">
                <Timer />
                <div className="header">
                    <h1 className="my-name">
                        Zhuotang Li
                    </h1>
                    <div className="caption">
                        <Typewriter
                            options={{
                                strings: ["Know it means Own it"],
                                autoStart: true,
                                loop: true,
                                cursor: "",
                                delay: 100,
                            }} />
                    </div>
                </div>

            </div>
            <Slides />
        </>
    );
}

export default HomePage;