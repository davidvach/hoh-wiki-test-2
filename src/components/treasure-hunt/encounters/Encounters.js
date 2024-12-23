import "./Encounters.css";

import Prologue from "../../shared/Prologue";
import SectionDivider from "../../shared/SectionDivider";
import Image from "../../shared/Image";

const Encounters = (props) => {

    const heroId = props.heroId;

    return <>
        <Prologue imageSrc={"https://i.ibb.co/FDghJ4Y/Treasure-Hunt-Icon.png"} alt={"Encounters"} maxHeight={"65px"} >
            Encounters
            </Prologue>
            <SectionDivider />
            <div style={{ display: "flex", justifyContent: "center", alignItems: "center", marginTop: "15px",marginBottom: "15px" }}>
            </div>
    </>
}

export default Encounters;