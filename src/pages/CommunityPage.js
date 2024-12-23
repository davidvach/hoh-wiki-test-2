import Container from "../components/shared/Container";

import ReactGA from "react-ga4";
import layoutCampaign from "../components/community/sectionsDefinition";
import Intro from "../components/community/intro/Intro";
import PrivacyPolicy from "../components/community/privacy-policy/PrivacyPolicy";
import { Link } from "react-router-dom";
import VideoCreators from "../components/community/video-creators/VideoCreators";

const CommunityPage = (props) => {

    const basePath = "community";

    ReactGA.send({
        hitType: "pageview",
        page: `/#/${basePath}`,
        title: `Community - ${props.tab.name}`,
    });

    const pageName = props.tab.url ? (
        <span>
            <Link to={`/${basePath}`} className="text-link-white">Community</Link> &gt; {props.tab.name}
        </span>
    ) : "Community";

    const renderSelectedTab = () => {
        switch (props.tab.url) {
            case "video-creators":
                return <VideoCreators tab={props.tab} />;
            case "privacy-policy":
                return <PrivacyPolicy tab={props.tab} />;
            default:
                return <Intro tab={props.tab} />;
        }
    };

    return <Container basePath={basePath} tabs={layoutCampaign.tabs} pageName={pageName}>
        {renderSelectedTab()}
    </Container>
}

export default CommunityPage;