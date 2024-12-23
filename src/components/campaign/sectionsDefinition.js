import icon_battle from "../../images/campaign/intro/icon-battle.webp";
import icon_expansion_city_capital_land from "../../images/campaign/provinces/icon_expansion_city_capital_land.webp";

const sectionsDefinition = {
    page: "campaign",
    tabs: [
        {
            id: 1,
            url: "",
            name: "Intro",
            img: icon_battle,
            show: true,
            dynamicSegments: [],
        },
        {
            id: 2,
            url: "provinces",
            name: "Provinces",
            img: icon_expansion_city_capital_land,
            show: true,
            dynamicSegments: [],
        },
    ]
}

export default sectionsDefinition;