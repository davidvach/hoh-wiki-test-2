import Navbar_Home from "../../images/navbar/Navbar_Home.webp";
import Navbar_Campaign from "../../images/navbar/Navbar_Campaign.webp";
import Navbar_Heroes from "../../images/navbar/Navbar_Heroes.webp";
import Navbar_Resources from "../../images/navbar/Navbar_Resources.webp";
import Navbar_AlliedCultures from "../../images/navbar/Navbar_AlliedCultures.webp";
import Navbar_TreasureHunt from "../../images/navbar/Navbar_TreasureHunt.webp";
import Navbar_Seasons from "../../images/navbar/Navbar_Seasons.webp";
import Navbar_Events from "../../images/navbar/Navbar_Events.webp";
import Navbar_Community from "../../images/navbar/Navbar_Community.webp";
import Navbar_Research from "../../images/navbar/Navbar_Research.webp";
import Navbar_Buildings from "../../images/navbar/Navbar_Buildings.webp";
import Navbar_Leaderboards from "../../images/navbar/Navbar_Leaderboards.webp";

const links = [
    {
        id: 1,
        url: "/",
        text: "Home",
        img: Navbar_Home,
        show: true,
    },
    {
        id: 2,
        url: "/campaign",
        text: "Campaign",
        img: Navbar_Campaign,
        show: true,
    },
    {
        id: 3,
        url: "/heroes",
        text: "Heroes",
        img: Navbar_Heroes,
        show: true,
    },
    {
        id: 4,
        url: "/buildings",
        text: "Buildings",
        img: Navbar_Buildings,
        show: true,
    },
    {
        id: 5,
        url: "/events",
        text: "Events",
        img: Navbar_Events,
        show: true,
    },
    {
        id: 6,
        url: "/allied-cultures",
        text: "Allied Cultures",
        img: Navbar_AlliedCultures,
        show: true,
    },
    {
        id: 7,
        url: "/research",
        text: "Research",
        img: Navbar_Research,
        show: true,
    },
    {
        id: 8,
        url: "/treasure-hunt",
        text: "Treasure Hunt",
        img: Navbar_TreasureHunt,
        show: true,
    },
    {
        id: 9,
        url: "/seasons",
        text: "Seasons",
        img: Navbar_Seasons,
        show: true,
    },
    {
        id: 10,
        url: "/leaderboards",
        text: "Leaderboards",
        img: Navbar_Leaderboards,
        show: true,
    },
    {
        id: 11,
        url: "/resources",
        text: "Resources",
        img: Navbar_Resources,
        show: true,
    },
    {
        id: 12,
        url: "/tesla-storms",
        text: "Tesla Storms",
        img: "https://i.ibb.co/nRvy33n/event-widget-backer-time-Paradox-2021.png",
        show: false,
    },
    {
        id: 13,
        url: "/community",
        text: "Community",
        img: Navbar_Community,
        show: true,
    },
]

export default links;