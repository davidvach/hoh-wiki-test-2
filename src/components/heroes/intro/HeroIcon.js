import "./HeroIcon.css";
import Image from "../../shared/Image";
import { Link } from "react-router-dom";

import layoutHeroes from "../sectionsDefinition";
import { createPathFromParameters } from "../../shared/utils";

import Unit_Unknown from "../../../images/heroes/intro/icons/Unit_Unknown.webp";

const HeroIcon = (props) => {

    return (
        <Link to={createPathFromParameters(layoutHeroes.page, props.tab.url, props.hero.id)} key={props.hero.id} className="text-link hero-icon-container">
            <Image src={props.hero.icon ? props.hero.icon : Unit_Unknown} alt="" inline={false} maxWidth={'100px'} />
            <span>{props.hero.name}</span>
        </Link>
    );
}

export default HeroIcon;
