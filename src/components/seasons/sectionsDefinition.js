import icon_seasonpass_progress from "../../images/seasons/intro/icon_seasonpass_progress.webp";
import icon_reward_season_pass from "../../images/seasons/rewards/icon_reward_season_pass.webp";
import icon_hud_gacha_rift from "../../images/seasons/heroes/icon_hud_gacha_rift.webp";

const sectionsDefinition = {
    page: "seasons",
    tabs: [
        {
            id: 1,
            url: "",
            name: "Intro",
            img: icon_seasonpass_progress,
            show: true,
            dynamicSegments: [],
        },
        {
            id: 2,
            url: "rewards",
            name: "Rewards",
            img: icon_reward_season_pass,
            show: true,
            dynamicSegments: [],
        },
        {
            id: 3,
            url: "heroes",
            name: "Featured Heroes",
            img: icon_hud_gacha_rift,
            show: true,
            dynamicSegments: [],
        },
    ]
}

export default sectionsDefinition;