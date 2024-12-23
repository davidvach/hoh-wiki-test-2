
import ath_sugarcane_distillery from "../../../images/shared/customizations/ath_sugarcane_distillery.webp";
import ath_voodoo_head from "../../../images/shared/customizations/ath_voodoo_head.webp"
import ath_pirate_den from "../../../images/shared/customizations/ath_pirate_den.webp";
import ath_belltower_cottage from "../../../images/shared/customizations/ath_belltower_cottage.webp";
import ath_the_scallywags_shanty from "../../../images/shared/customizations/ath_the_scallywags_shanty.webp";
import ath_coconut_tree from "../../../images/shared/customizations/ath_coconut_tree.webp";
import ath_hammock_trees from "../../../images/shared/customizations/ath_hammock_trees.webp";
import ath_robber_crab from "../../../images/shared/customizations/ath_robber_crab.webp";
import ath_skull_home from "../../../images/shared/customizations/ath_skull_home.webp";
import ath_tropical_fruit_farm from "../../../images/shared/customizations/ath_tropical_fruit_farm.webp";
import ath_crows_inn from "../../../images/shared/customizations/ath_crows_inn.webp";
import ath_jolly_roger from "../../../images/shared/customizations/ath_jolly_roger.webp";
import ath_long_nine from "../../../images/shared/customizations/ath_long_nine.webp";
import ath_treasure_trove from "../../../images/shared/customizations/ath_treasure_trove.webp";
import ath_sparkling_fortune from "../../../images/shared/customizations/ath_sparkling_fortune.webp";
import world_fair_2024_singularity_movement from "../../../images/shared/customizations/world_fair_2024_singularity_movement.webp";
import world_fair_2024_tesla_coil from "../../../images/shared/customizations/world_fair_2024_tesla_coil.webp";
import world_fair_2024_void_reactor from "../../../images/shared/customizations/world_fair_2024_void_reactor.webp";
import world_fair_2024_heritage_exhibition from "../../../images/shared/customizations/world_fair_2024_heritage_exhibition.webp";
import world_fair_2024_ticket_booth from "../../../images/shared/customizations/world_fair_2024_ticket_booth.webp";
import winter_event_2024_winter_home from "../../../images/shared/customizations/winter_event_2024_winter_home.webp";
import winter_event_2024_winter_home_2 from "../../../images/shared/customizations/winter_event_2024_winter_home_2.webp";
import winter_event_2024_candy_store from "../../../images/shared/customizations/winter_event_2024_candy_store.webp";
import winter_event_2024_frozen_pond from "../../../images/shared/customizations/winter_event_2024_frozen_pond.webp";
import winter_event_2024_winter_market from "../../../images/shared/customizations/winter_event_2024_winter_market.webp";
import winter_event_2024_snowman from "../../../images/shared/customizations/winter_event_2024_snowman.webp";
import winter_event_2024_sleigh from "../../../images/shared/customizations/winter_event_2024_sleigh.webp";
import winter_event_2024_winter_pyramid from "../../../images/shared/customizations/winter_event_2024_winter_pyramid.webp";

const customizations = [
    {
        id: "customization_ath_voodoo_head", 
        name: "Voodoo Head", 
        img: ath_voodoo_head, 
        production: {
            resource: "coins",
            time: "1d",
        },
        boost: {
            type: "culture_bonus",
            amount: "50%"
        },
        duration: "7d",
        applyTo: "Little Culture Site"
    },
    {
        id: "customization_ath_sugarcane_distillery", 
        name: "Sugarcane Distillery", 
        img: ath_sugarcane_distillery, 
        production: {
            resource: "food",
            time: "1d",
        },
        duration: "7d",
        applyTo: "Rural Farm"
    },
    {
        id: "customization_ath_pirate_den", 
        name: "Pirate Den", 
        img: ath_pirate_den, 
        production: {
            resource: "coins",
            time: "1d",
        },
        duration: "7d",
        applyTo: "Small Home"
    },
    {
        id: "customization_ath_belltower_cottage", 
        name: "Belltower Cottage", 
        img: ath_belltower_cottage, 
        production: {
            resource: "goods",
            time: "1d",
            amount: 150
        },
        duration: "7d",
        applyTo: "Medium Home"
    },
    {
        id: "customization_ath_the_scallywags_shanty", 
        name: "The Scallywag's Shanty", 
        img: ath_the_scallywags_shanty, 
        production: {
            resource: "food",
            time: "1d",
        },
        duration: "7d",
        applyTo: "Domestic Farm"
    },
    {
        id: "customization_ath_coconut_tree", 
        name: "Coconut Tree", 
        img: ath_coconut_tree, 
        production: {
            resource: "food",
            time: "1d",
        },
        boost: {
            type: "culture_bonus",
            amount: "50%"
        },
        duration: "7d",
        applyTo: "Little Culture Site"
    },
    {
        id: "customization_ath_hammock_trees", 
        name: "Hammock Trees", 
        img: ath_hammock_trees,
        boost: {
            type: "culture_bonus",
            amount: "50%"
        },
        duration: "7d",
        applyTo: "Compact Culture Site"
    },
    {
        id: "customization_ath_robber_crab", 
        name: "Robber Crab", 
        img: ath_robber_crab,
        boost: {
            type: "culture_bonus",
            amount: "50%"
        },
        duration: "7d",
        applyTo: "Moderate Culture Site"
    },
    {
        id: "customization_ath_skull_home", 
        name: "Skull Home", 
        img: ath_skull_home, 
        production: {
            resource: "coins",
            time: "1d",
        },
        duration: "7d",
        applyTo: "Small Home"
    },
    {
        id: "customization_ath_tropical_fruit_farm", 
        name: "Tropical Fruit Farm", 
        img: ath_tropical_fruit_farm, 
        production: {
            resource: "research_point",
            time: "1d",
            amount: 1
        },
        duration: "7d",
        applyTo: "Rural Farm"
    },
    {
        id: "customization_ath_crows_inn", 
        name: "Crow's Inn", 
        img: ath_crows_inn,
        boost: {
            type: "food_bonus",
            amount: "5%"
        },
        duration: "7d",
        applyTo: "Domestic Farm"
    },
    {
        id: "customization_ath_jolly_roger", 
        name: "Jolly Roger", 
        img: ath_jolly_roger, 
        production: {
            resource: "goods",
            time: "1d",
            amount: 105
        },
        boost: {
            type: "culture_bonus",
            amount: "50%"
        },
        duration: "7d",
        applyTo: "Little Culture Site"
    },
    {
        id: "customization_ath_long_nine", 
        name: "Long Nine", 
        img: ath_long_nine,
        production: {
            resource: "goods",
            time: "1d",
            amount: 105
        },
        duration: "7d",
        applyTo: "Compact Culture Site"
    },
    {
        id: "customization_ath_treasure_trove", 
        name: "Treasure Trove", 
        img: ath_treasure_trove,
        boost: {
            type: "goods_bonus",
            amount: "5%"
        },
        duration: "7d",
        applyTo: "Compact Culture Site"
    },
    {
        id: "customization_ath_sparkling_fortune", 
        name: "Sparkling Fortune", 
        img: ath_sparkling_fortune,
        boost: {
            type: "coins_bonus",
            amount: "5%"
        },
        duration: "7d",
        applyTo: "Moderate Culture Site"
    },
    {
        id: "customization_world_fair_2024_singularity_movement", 
        name: "Singularity Movement", 
        img: world_fair_2024_singularity_movement,
        production: {
            resource: "antimatter_legendary_part",
            time: "1d",
            amount: "1"
        },
        duration: "20d",
        applyTo: "Domestic Farm"
    },
    {
        id: "customization_world_fair_2024_tesla_coil", 
        name: "Tesla Coil", 
        img: world_fair_2024_tesla_coil,
        production: {
            resources: [
                "red_crest_common",
                "blue_crest_common",
                "green_crest_common",
                "yellow_crest_common",
                "purple_crest_common",
            ],
            time: "1d",
            amount: "2"
        },
        duration: "20d",
        applyTo: "Small Home"
    },
    {
        id: "customization_world_fair_2024_void_reactor", 
        name: "Void Reactor", 
        img: world_fair_2024_void_reactor,
        production: {
            resource: "antimatter_common_part",
            time: "1d",
            amount: "1"
        },
        duration: "20d",
        applyTo: "Medium Home"
    },
    {
        id: "customization_world_fair_2024_heritage_exhibition", 
        name: "Heritage Exhibition", 
        img: world_fair_2024_heritage_exhibition,
        production: {
            resources: [
                {
                    resource: "war_horn",
                    percentage: 33
                },
                {
                    resource: "shadow_dial",
                    percentage: 33
                },
                {
                    resource: "fragrant_potpourri",
                    percentage: 33
                }
            ],
            time: "1d",
            amount: "1"
        },
        duration: "20d",
        applyTo: "Rural Farm"
    },
    {
        id: "customization_world_fair_2024_ticket_booth", 
        name: "Ticket Booth", 
        img: world_fair_2024_ticket_booth,
        production: {
            resource: "victory_ticket",
            time: "1d",
            amount: "1"
        },
        duration: "20d",
        applyTo: "Moderate Culture Site"
    },
    {
        id: "customization_winter_event_2024_winter_home", 
        name: "Winter Home", 
        img: winter_event_2024_winter_home_2,
        production: {
            resource: "antimatter_common_part",
            time: "1d",
            amount: "1"
        },
        duration: "20d",
        applyTo: "Small Home"
    },
    {
        id: "customization_winter_event_2024_candy_store", 
        name: "Candy Store", 
        img: winter_event_2024_candy_store,
        production: {
            resource: "antimatter_common_part",
            time: "1d",
            amount: "3"
        },
        duration: "20d",
        applyTo: "Medium Home"
    },
    {
        id: "customization_winter_event_2024_frozen_pond", 
        name: "Frozen Pond", 
        img: winter_event_2024_frozen_pond,
        production: {
            resource: "chest_ascension_2",
            time: "2d",
            amount: "1"
        },
        duration: "20d",
        applyTo: "Rural Farm"
    },
    {
        id: "customization_winter_event_2024_winter_market", 
        name: "Winter Market", 
        img: winter_event_2024_winter_market,
        production: {
            resource: "antimatter_legendary_part",
            time: "1d",
            amount: "1"
        },
        duration: "20d",
        applyTo: "Domestic Farm"
    },
    {
        id: "customization_winter_event_2024_snowman", 
        name: "Snowman", 
        img: winter_event_2024_snowman,
        production: {
            resource: "goods",
            time: "1d",
            amount: "26"
        },
        duration: "20d",
        applyTo: "Little Culture Site"
    },
    {
        id: "customization_winter_event_2024_sleigh", 
        name: "Sleigh", 
        img: winter_event_2024_sleigh,
        production: {
            resource: "victory_ticket",
            time: "1d",
            amount: "1"
        },
        duration: "20d",
        applyTo: "Compact Culture Site"
    },
    {
        id: "customization_winter_event_2024_winter_pyramid", 
        name: "Winter Pyramid", 
        img: winter_event_2024_winter_pyramid,
        production: {
            resource: "chest_teslacrests_enhanced",
            time: "1d",
            amount: "1"
        },
        duration: "20d",
        applyTo: "Moderate Culture Site"
    },
]

const obtainableFrom = {
    "_ath_": "Alliance Treasure Hunt",
    "_world_fair_2024_": "World Fair 2024",
    "_winter_event_2024": "Winter Event 2024",
}

export {customizations, obtainableFrom};