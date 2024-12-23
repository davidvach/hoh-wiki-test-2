import icon_hud_build from "../../images/buildings/intro/icon_hud_build.webp";
import puzzle_piece from "../../images/shared/resources/puzzle_piece.webp";

const sectionsDefinition = {
    page: "buildings",
    tabs: [
        {
            id: 1,
            url: "",
            name: "Intro",
            img: icon_hud_build,
            show: true,
            dynamicSegments: [],
        },
        {
            id: 2,
            url: "collectable",
            name: "Collectable",
            img: puzzle_piece,
            show: true,
            dynamicSegments: [],
        },
    ]
}       

export default sectionsDefinition;