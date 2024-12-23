import icon_ranking_points from "../../images/leaderboards/intro/icon_ranking_points.webp";
import Ranking04 from "../../images/leaderboards/ranking/Ranking04.webp";

const sectionsDefinition = {
    page: "leaderboards",
    tabs: [
        {
            id: 1,
            url: "",
            name: "Intro",
            img: icon_ranking_points,
            show: true,
            dynamicSegments: [],
        },
        {
            id: 2,
            url: "milestones",
            name: "Milestones",
            img: icon_ranking_points,
            show: true,
            dynamicSegments: [],
        },
        {
            id: 3,
            url: "ranking",
            name: "Ranking",
            img: Ranking04,
            show: true,
            dynamicSegments: [],
        },
    ]
}

export default sectionsDefinition;