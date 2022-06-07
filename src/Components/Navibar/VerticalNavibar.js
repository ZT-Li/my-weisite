import "./VerticalNavibar.css";
import { useNavigate } from "react-router-dom";

const VerticleNavibar = (props) => {

    let navi = useNavigate();
    //navigate to JavaPage
    function ToHomePage() {
        navi("/");
    }

    return (
        <div className="verticle-navibar">
            <div className="back-btn" onClick={ToHomePage}>
                ZL
            </div>
            <ul className="navi-list">
                {props.arr.map(item => {
                    return (
                        <li className="items">
                            <a href="">
                                <div className="vbar-link">{item}</div>
                            </a>
                        </li>
                    );
                })}
            </ul>
        </div>
    );
}

export default VerticleNavibar;