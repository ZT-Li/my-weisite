import "./HomePage.css"
import Typewriter from "typewriter-effect";

const HomePage = () => {
    return (
        <div className="homepage">
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
                            delay: 75,
                        }} />
                </div>
            </div>
        </div>
    );
}

export default HomePage;