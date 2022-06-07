import "./Navibar.css";
import { useRef } from "react";
import { Links } from "./Navdata";

const Navibar = () => {

    const navbarRef = useRef();
    function scroll() {
        if (window.scrollY > 100) {
            navbarRef.current.classList.add("onscroll");
        } else {
            navbarRef.current.classList.remove("onscroll");
        }
    }

    window.addEventListener("scroll", scroll);

    return (
        <div ref={navbarRef} className="navibar">
            <div className="navi-links">
                {Links.map((link) => {
                    return (
                        <a className="link" href={link.url} key={link.idx}>
                            <div className="link-label">
                                {link.text}
                            </div>
                        </a>
                    );
                })}
            </div>
        </div>
    )
}

export default Navibar;