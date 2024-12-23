import Container from "../components/shared/Container";

import { useParams } from "react-router-dom";

import ReactGA from "react-ga4";
import layoutTreasureHunt from "../components/treasure-hunt/sectionsDefinition";
import Intro from "../components/treasure-hunt/intro/Intro";
import Encounters from "../components/treasure-hunt/encounters/Encounters";
import Checkpoints from "../components/treasure-hunt/checkpoints/Checkpoints";
import Customizations from "../components/treasure-hunt/customizations/Customizations";
import { difficulties } from "../components/treasure-hunt/data";
import useOptionURL from "../components/shared/hooks/useOptionURL";
import SelectBox from "../components/shared/SelectBox";
import { Link } from "react-router-dom";

const TreasureHuntPage = (props) => {

    const basePath = "treasure-hunt";

    ReactGA.send({
        hitType: "pageview",
        page: `/#/${basePath}`,
        title: `Treasure Hunt - ${props.tab.name}`,
    });

    const pageName = props.tab.url ? (
        <span>
            <Link to={`/${basePath}`} className="text-link-white">Treasure Hunt</Link> &gt; {props.tab.name}
        </span>
    ) : "Treasure Hunt";

    const options = difficulties.map((oneDifficulty) => {
        return {value: oneDifficulty.id, label: `${oneDifficulty.name}`, image: `${oneDifficulty.icon}`}
    });

    const renderSelectedTab = () => {
        switch (props.tab.url) {
            case "encounters":
                return <Encounters tab={props.tab} />
            case "checkpoints":
                return <Checkpoints tab={props.tab} />
            case "customizations":
                    return <Customizations tab={props.tab} />
            default:
                return <Intro tab={props.tab} />;
        }
    };

    return <Container basePath={basePath} tabs={layoutTreasureHunt.tabs} pageName={pageName}>
        {renderSelectedTab()}
    </Container>
}

export default TreasureHuntPage;