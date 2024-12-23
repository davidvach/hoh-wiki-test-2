import alliedCultures_intro from "../../images/allied-cultures/intro/icon_feature_eventcities.webp";
import quests_icon from "../../images/allied-cultures/quests/quests_icon.webp";
import buildings_icon from "../../images/allied-cultures/buildings/buildings_icon.webp";
import worldwonder_icon from "../../images/allied-cultures/world-wonder/worldwonder_icon.webp";
import strategies_icon from "../../images/allied-cultures/strategies/icon_unitstat_movementspeed.webp";
import layouts_icon from "../../images/allied-cultures/layouts/Technology_Roman_Empire_Urban_Management.webp";

const sectionsDefinition = {
    page: "allied-cultures",
    tabs: [
        {
            id: 1,
            url: "",
            name: "Intro",
            img: alliedCultures_intro,
            show: true,
            dynamicSegments: [],
        },
        {
            id: 2,
            url: "quests",
            name: "Quests",
            img: quests_icon,
            show: true,
            dynamicSegments: [],
        },
        {
            id: 3,
            url: "buildings",
            name: "Buildings",
            img: buildings_icon,
            show: true,
            dynamicSegments: [],
        },
        {
            id: 4,
            url: "world-wonder",
            name: "World Wonder",
            img: worldwonder_icon,
            show: true,
            dynamicSegments: [],
        },
        {
            id: 5,
            url: "strategies",
            name: "Strategies",
            img: strategies_icon,
            show: true,
            dynamicSegments: [],
        },
        {
            id: 6,
            url: "layouts",
            name: "Layouts",
            img: layouts_icon,
            show: true,
            dynamicSegments: [],
        },
    ]
}       

export default sectionsDefinition;