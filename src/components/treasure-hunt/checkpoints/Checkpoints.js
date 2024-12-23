import "./Checkpoints.css";

import Prologue from "../../shared/Prologue";
import SectionDivider from "../../shared/SectionDivider";
import Image from "../../shared/Image";
import { checkpoints } from "../data";
import TableCheckpoints from "./TableCheckpoints";
import H1 from "../../shared/H1";

import icon_mystery_chest_gold from "../../../images/treasure-hunt/checkpoints/icon_mystery_chest_gold.webp";
import checkpoints_ui from "../../../images/treasure-hunt/checkpoints/checkpoints_ui.webp";
import icon_ath_encounter from "../../../images/treasure-hunt/checkpoints/icon_ath_encounter.webp";

const Checkpoints = (props) => {

    const heroId = props.heroId;

    return <>
        <Prologue imageSrc={icon_mystery_chest_gold} alt={"Checkpoints"} maxHeight={"65px"} >
            Alliance Checkpoints are the main sequence of rewards in Alliance Treasure Hunt. Together with your alliance members, you collect points for each completed encounter.
            The number of points you receive depends on your current difficulty level. The higher the difficulty, the more you contribute to the shared rewards and the farther you can progress!<br/>
            Note: You can click on the customizations to preview their details!
        </Prologue>
        <SectionDivider />
        <H1 center={true}>Checkpoints</H1>
        <div style={{ display: "flex", justifyContent: "center", alignItems: "center", marginTop: "15px", marginBottom: "15px" }}>
            <Image src={icon_ath_encounter} maxHeight={'100px'}/>
        </div>
        <TableCheckpoints data={checkpoints} />
    </>
}

export default Checkpoints;