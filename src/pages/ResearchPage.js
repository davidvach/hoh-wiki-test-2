import Container from "../components/shared/Container";

import ReactGA from "react-ga4";
import layoutCampaign from "../components/research/sectionsDefinition";
import Intro from "../components/research/intro/Intro";
import { Link } from "react-router-dom";

const ResearchPage = (props) => {

    const basePath = "research";

    ReactGA.send({
        hitType: "pageview",
        page: `/#/${basePath}`,
        title: `Research - ${props.tab.name}`,
    });

    const pageName = props.tab.url ? (
        <span>
            <Link to={`/${basePath}`} className="text-link-white">Research</Link> &gt; {props.tab.name}
        </span>
    ) : "Research";

    const renderSelectedTab = () => {
        switch (props.tab.url) {
            default:
                return <Intro tab={props.tab} />;
        }
    };

    return <Container basePath={basePath} tabs={layoutCampaign.tabs} pageName={pageName}>
        {renderSelectedTab()}
    </Container>
}

export default ResearchPage;