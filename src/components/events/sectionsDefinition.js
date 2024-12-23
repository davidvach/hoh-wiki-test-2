import icon_event_world_fair_tokens from "../../images/events/intro/icon_event_world_fair_tokens.webp";
import EventPassGrandPriceChest from "../../images/events/grand-prizes/EventPassGrandPriceChest.webp";
import icon_selection_kit_customizations_generic from "../../images/events/customizations/icon_selection_kit_customizations_generic.webp";
import quests_icon from "../../images/events/quests/quests_icon.webp";
import icon_event_building_progression_info from "../../images/events/daily-specials/icon_event_building_progression_info.webp";
import calendar from "../../images/events/daily-specials/calendar.webp";

const sectionsDefinition = {
    page: "events",
    tabs: [
        {
            id: 1,
            url: "",
            name: "Intro",
            img: icon_event_world_fair_tokens,
            show: true,
            dynamicSegments: [],
        },
        {
            id: 3,
            url: "daily-specials",
            name: "Daily Specials",
            img: calendar,
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
            id: 4,
            url: "customizations",
            name: "Customizations",
            img: icon_selection_kit_customizations_generic,
            show: true,
            dynamicSegments: [":customizationId"],
        },
        {
            id: 5,
            url: "grand-prizes",
            name: "Grand Prizes",
            img: EventPassGrandPriceChest,
            show: true,
            dynamicSegments: [],
        },
    ]
}

export default sectionsDefinition;