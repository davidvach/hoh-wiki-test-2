import icon_amber from "../../images/shared/resources/icon_amber.webp";
import icon_war_horn from "../../images/shared/resources/icon_war_horn.webp";
import Food from '../../images/resources/basic/food.webp';
import icon_manipulator_crest_common from "../../images/shared/resources/icon_manipulator_crest_common.webp";
import alabaster_idol from '../../images/resources/goods/icon-alabaster-idol.webp';
import icon_goldfood from '../../images/resources/intro/icon-goldfood.webp';

const sectionsDefinition = {
    page: "resources",
    tabs: [
        {
            id: 1,
            url: "",
            name: "Intro",
            img: icon_goldfood,
            show: true,
            dynamicSegments: [],
        },
        {
            id: 2,
            url: "basic",
            name: "Basic",
            img: Food,
            show: true,
            dynamicSegments: [],
        },
        {
            id: 3,
            url: "goods",
            name: "Goods",
            img: alabaster_idol,
            show: true,
            dynamicSegments: [],
        },
        {
            id: 4,
            url: "research",
            name: "Research",
            img: icon_amber,
            show: true,
            dynamicSegments: [],
        },
        {
            id: 5,
            url: "crests",
            name: "Crests",
            img: icon_manipulator_crest_common,
            show: true,
            dynamicSegments: [],
        },
        {
            id: 6,
            url: "ascension",
            name: "Ascension",
            img: icon_war_horn,
            show: true,
            dynamicSegments: [],
        },
    ]
}

export default sectionsDefinition;