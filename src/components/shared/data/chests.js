import icon_chest_teslacrests_2_blue from "../../../images/shared/chests/icon_chest_teslacrests_2_blue.webp";
import icon_chest_teslacrests_2_green from "../../../images/shared/chests/icon_chest_teslacrests_2_green.webp";
import icon_chest_teslacrests_2_purple from "../../../images/shared/chests/icon_chest_teslacrests_2_purple.webp";
import icon_chest_teslacrests_2_red from "../../../images/shared/chests/icon_chest_teslacrests_2_red.webp";
import icon_chest_teslacrests_2_yellow from "../../../images/shared/chests/icon_chest_teslacrests_2_yellow.webp";
import icon_chest_teslacrests_3_blue from "../../../images/shared/chests/icon_chest_teslacrests_3_blue.webp";
import icon_chest_teslacrests_3_green from "../../../images/shared/chests/icon_chest_teslacrests_3_green.webp";
import icon_chest_teslacrests_3_purple from "../../../images/shared/chests/icon_chest_teslacrests_3_purple.webp";
import icon_chest_teslacrests_3_red from "../../../images/shared/chests/icon_chest_teslacrests_3_red.webp";
import icon_chest_teslacrests_3_yellow from "../../../images/shared/chests/icon_chest_teslacrests_3_yellow.webp";
import icon_chest_teslacrests_common from "../../../images/shared/chests/icon_chest_teslacrests_common.webp";
import icon_chest_teslacrests_enhanced from "../../../images/shared/chests/icon_chest_teslacrests_enhanced.webp";
import icon_chest_teslacrests_superior from "../../../images/shared/chests/icon_chest_teslacrests_superior.webp";
import icon_chest_ascension from "../../../images/shared/chests/icon_chest_ascension.webp";
import icon_chest_ascension_2 from "../../../images/shared/chests/icon_chest_ascension_2.webp";
import icon_chest_ascension_3 from "../../../images/shared/chests/icon_chest_ascension_3.webp";

const chests = [
    {
        id: "chest_color_crests_red_common_enhanced_superior", 
        name: "Chest with Red Crests", 
        img: icon_chest_teslacrests_3_red,
        items: [
            {
                resource: "red_crest_common",
                amount: 20,
                percentage: 33
            },
            {
                resource: "red_crest_enhanced",
                amount: 15,
                percentage: 33
            },
            {
                resource: "red_crest_superior",
                amount: 10,
                percentage: 33
            },
        ]
    },
    {
        id: "chest_color_crests_blue_common_enhanced_superior", 
        name: "Chest with Blue Crests", 
        img: icon_chest_teslacrests_3_blue,
        items: [
            {
                resource: "blue_crest_common",
                amount: 20,
                percentage: 33
            },
            {
                resource: "blue_crest_enhanced",
                amount: 15,
                percentage: 33
            },
            {
                resource: "blue_crest_superior",
                amount: 10,
                percentage: 33
            },
        ]
    },
    {
        id: "chest_color_crests_yellow_common_enhanced_superior", 
        name: "Chest with Yellow Crests", 
        img: icon_chest_teslacrests_3_yellow,
        items: [
            {
                resource: "yellow_crest_common",
                amount: 20,
                percentage: 33
            },
            {
                resource: "yellow_crest_enhanced",
                amount: 15,
                percentage: 33
            },
            {
                resource: "yellow_crest_superior",
                amount: 10,
                percentage: 33
            },
        ]
    },
    {
        id: "chest_color_crests_purple_common_enhanced_superior", 
        name: "Chest with Purple Crests", 
        img: icon_chest_teslacrests_3_purple,
        items: [
            {
                resource: "purple_crest_common",
                amount: 20,
                percentage: 33
            },
            {
                resource: "purple_crest_enhanced",
                amount: 15,
                percentage: 33
            },
            {
                resource: "purple_crest_superior",
                amount: 10,
                percentage: 33
            },
        ]
    },
    {
        id: "chest_color_crests_green_common_enhanced_superior", 
        name: "Chest with Green Crests", 
        img: icon_chest_teslacrests_3_green,
        items: [
            {
                resource: "green_crest_common",
                amount: 20,
                percentage: 33
            },
            {
                resource: "green_crest_enhanced",
                amount: 15,
                percentage: 33
            },
            {
                resource: "green_crest_superior",
                amount: 10,
                percentage: 33
            },
        ]
    },
    {
        id: "chest_ascension", //these ascension chests are not used currently. In the future, I should replace the static values in specific customizations by these chests
        name: "Chest with Uncommon Ascension Materials", 
        img: icon_chest_ascension,
        items: [
            {
                resource: "shadow_dial",
                amount: 1,
            },
            {
                resource: "fragrant_potpourri",
                amount: 1,
            },
            {
                resource: "war_horn",
                amount: 1,
            },
        ]
    },
    {
        id: "chest_ascension_2", 
        name: "Chest with Rare Ascension Materials", 
        img: icon_chest_ascension_2,
        items: [
            {
                resource: "charta_terrestre",
                amount: 1,
            },
            {
                resource: "crested_guidon",
                amount: 1,
            },
            {
                resource: "herbal_poultice",
                amount: 1,
            },
        ],
    },
    {
        id: "chest_ascension_3", 
        name: "Chest with Legendary Ascension Materials", 
        img: icon_chest_ascension_3,
        items: [
            {
                resource: "travelers_compass",
                amount: 1,
            },
            {
                resource: "hortus_sanitatis",
                amount: 1,
            },
            {
                resource: "gilded_pennant",
                amount: 1,
            },
        ]
    },
    {
        id: "chest_teslacrests_common", 
        name: "Chest with Common Tesla Crests", 
        img: icon_chest_teslacrests_common,
        items: [
            {
                resource: "green_crest_common",
                amount: 1,
                percentage: 20
            },
            {
                resource: "yellow_crest_common",
                amount: 1,
                percentage: 20
            },
            {
                resource: "red_crest_common",
                amount: 1,
                percentage: 20
            },
            {
                resource: "purple_crest_common",
                amount: 1,
                percentage: 20
            },
            {
                resource: "blue_crest_common",
                amount: 1,
                percentage: 20
            },
        ]
    },
    {
        id: "chest_teslacrests_enhanced", 
        name: "Chest with Enhanced Tesla Crests", 
        img: icon_chest_teslacrests_enhanced,
        items: [
            {
                resource: "green_crest_enhanced",
                amount: 1,
                percentage: 20
            },
            {
                resource: "yellow_crest_enhanced",
                amount: 1,
                percentage: 20
            },
            {
                resource: "red_crest_enhanced",
                amount: 1,
                percentage: 20
            },
            {
                resource: "purple_crest_enhanced",
                amount: 1,
                percentage: 20
            },
            {
                resource: "blue_crest_enhanced",
                amount: 1,
                percentage: 20
            },
        ]
    },
    {
        id: "chest_teslacrests_superior", 
        name: "Chest with Superior Tesla Crests", 
        img: icon_chest_teslacrests_superior,
        items: [
            {
                resource: "green_crest_superior",
                amount: 1,
                percentage: 20
            },
            {
                resource: "yellow_crest_superior",
                amount: 1,
                percentage: 20
            },
            {
                resource: "red_crest_superior",
                amount: 1,
                percentage: 20
            },
            {
                resource: "purple_crest_superior",
                amount: 1,
                percentage: 20
            },
            {
                resource: "blue_crest_superior",
                amount: 1,
                percentage: 20
            },
        ]
    },
]

export default chests;