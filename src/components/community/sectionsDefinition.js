import technology_alliance_members from "../../images/community/intro/technology_alliance_members.webp";
import icon_social_media_discord from "../../images/community/icon_social_media_discord.webp";
import icon_youtube from "../../images/community/icon_youtube.webp";
import xp_scroll_uncommon from "../../images/community/xp_scroll_uncommon.webp";

const sectionsDefinition = {
    page: "community",
    tabs: [
        {
            id: 1,
            url: "",
            name: "Intro",
            img: technology_alliance_members,
            show: true,
            dynamicSegments: [],
        },
        {
            id: 2,
            url: "discord",
            name: "Discord",
            img: icon_social_media_discord,
            show: false,
            dynamicSegments: [],
        },
        {
            id: 3,
            url: "video-creators",
            name: "Video Creators",
            img: icon_youtube,
            show: true,
            dynamicSegments: [],
        },
        {
            id: 4,
            url: "privacy-policy",
            name: "Privacy Policy",
            img: xp_scroll_uncommon,
            show: true,
            dynamicSegments: [],
        },
    ]
}

export default sectionsDefinition;