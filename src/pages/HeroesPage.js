import Container from "../components/shared/Container";
import ReactGA from "react-ga4";
import { useParams, Link } from "react-router-dom";
import layoutHeroes from "../components/heroes/sectionsDefinition";
import Intro from "../components/heroes/intro/Intro";
import { allHeroes } from "../components/heroes/data";

const HeroesPage = (props) => {

    const basePath = "heroes";

    ReactGA.send({
        hitType: "pageview",
        page: `/#/${basePath}`,
        title: `Heroes - ${props.tab.name}`,
    });

    const { heroId } = useParams();

    const hero = allHeroes.find(oneHero => oneHero.id == heroId);
    const heroName = hero ? hero.name : "";

    const pageName = heroName ? (
        <span>
            <Link to={`/${basePath}`} className="text-link-white">Heroes</Link> &gt; {heroName}
        </span>
    ) : "Heroes";

    const renderSelectedTab = () => {
        switch (props.tab.url) {
            default:
                return <Intro tab={props.tab} heroId={heroId} />;
        }
    };

    return (
        <Container basePath={basePath} tabs={layoutHeroes.tabs} pageName={pageName}>
            {renderSelectedTab()}
        </Container>
    );
}

export default HeroesPage;
