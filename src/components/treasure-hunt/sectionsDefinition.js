import icon_ath_attempt from "../../images/treasure-hunt/intro/icon_ath_attempt.webp";
import icon_mystery_chest_gold from "../../images/treasure-hunt/checkpoints/icon_mystery_chest_gold.webp";
import icon_selection_kit_customizations_generic from "../../images/events/customizations/icon_selection_kit_customizations_generic.webp";

const sectionsDefinition = {
    page: "treasure-hunt",
    tabs: [
        {
            id: 1,
            url: "",
            name: "Intro",
            img: icon_ath_attempt,
            show: true,
            dynamicSegments: [],
        },
        {
            id: 2,
            url: "encounters",
            name: "Encounters",
            img: "https://i.ibb.co/FDghJ4Y/Treasure-Hunt-Icon.png",
            show: false,
            dynamicSegments: [],
        },
        {
            id: 3,
            url: "checkpoints",
            name: "Checkpoints",
            img: icon_mystery_chest_gold,
            show: true,
            dynamicSegments: [],
        },
        {
            id: 4,
            url: "customizations",
            name: "Customizations",
            img: icon_selection_kit_customizations_generic,
            show: true,
            dynamicSegments: [],
        },
    ]
}

export default sectionsDefinition;