import "./Slides.css";
import { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";


//onclick functions
const bg_img = [
    "/icons/java_logo.png",
    "/icons/js_logo.png"
];
// delay of the auto playing slide
const delay = 3000;




const Slides = () => {
    //indexing the slides and btns
    const [index, setIndex] = useState(0);
    //timeout constant
    const timeout = useRef(null);
    //reset the timeout
    function reset() {
        if (timeout.current) {
            clearTimeout(timeout.current);
        }
    }


    let navi = useNavigate();
    //navigate to JavaPage
    function ToJavaPage() {
        navi("/java");
    }

    //navigate to JSPage
    function ToJSPage() {
        navi("./js");
    }

    //navigation array
    const navigations = [ToJavaPage, ToJSPage];

    //update the slides and corresponding btns with the index constant, and reset the timeout when index is manually changed
    useEffect(() => {
        reset()
        timeout.current = setTimeout(
            () => setIndex(
                (pIdx) => pIdx === bg_img.length - 1 ? 0 : pIdx + 1
            ), delay);
        return () => { reset() };
    }, [index]);

    //console.log(index)


    return (
        <div className="content">
            <div className="slider" style={{ transform: `translate3d(${-index * 100}%, 0, 0)` }}>
                {bg_img.map((bg, idx) => (<div className="slide" key={idx} style={{
                    backgroundImage: `url(${process.env.PUBLIC_URL + bg})`
                }} onClick={navigations[idx]}>
                </div>))}
            </div>
            <div className="selector">
                {bg_img.map((_, idx) => (<div className={`dot${index === idx ? " active" : ""}`} key={idx} onClick={() => setIndex(idx)}></div>))}
            </div>
        </div >
    );
}

export default Slides;