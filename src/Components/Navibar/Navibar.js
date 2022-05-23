import "./Navibar.css";
import { useState } from "react";
import { Links } from "./Navdata";


const Navibar = () => {
    const [scroll, setScroll] = useState(false);
    const checkScroll = () => {
        if (window.scrollY >= 80) {
            setScroll(true);
        } else {
            setScroll(false);
        }
    }

    window.addEventListener("scroll", checkScroll);
    return (
        <div className={scroll ? "navibar-onscroll" : "navibar"}>
            <div className="navi-links">
                {Links.map((link) => {
                    return <a className="link" href={link.url} key={link.idx}>{link.text}</a>
                })}
            </div>
        </div>
    )
}

export default Navibar;