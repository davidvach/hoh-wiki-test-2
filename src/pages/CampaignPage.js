import Container from "../components/shared/Container";

import ReactGA from "react-ga4";
import layoutCampaign from "../components/campaign/sectionsDefinition";
import Intro from "../components/campaign/intro/Intro";
import Provinces from "../components/campaign/provinces/Provinces";
import { Link } from "react-router-dom";

const CampaignPage = (props) => {

    const basePath = "campaign";

    ReactGA.send({
        hitType: "pageview",
        page: `/#/${basePath}`,
        title: `Campaign - ${props.tab.name}`,
    });

    const pageName = props.tab.url ? (
        <span>
            <Link to={`/${basePath}`} className="text-link-white">Campaign</Link> &gt; {props.tab.name}
        </span>
    ) : "Campaign";

    const renderSelectedTab = () => {
        switch (props.tab.url) {
            case "provinces":
                return <Provinces tab={props.tab} />;
            default:
                return <Intro tab={props.tab} />;
        }
    };

    return <Container basePath={basePath} tabs={layoutCampaign.tabs} pageName={pageName}>
        {renderSelectedTab()}
    </Container>
}

export default CampaignPage;