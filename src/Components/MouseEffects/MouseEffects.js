import MouseParticles from "react-mouse-particles";

const MouseEffects = () => {
    return (
        <MouseParticles
            g={1}
            color="white"
            num={10}
            radius={2}
            life={1.5}
            cull="MuiSvgIcon-root,MuiButton-root"
        />
    );
}

export default MouseEffects;