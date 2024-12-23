import cleopatra from "../../images/heroes/intro/tutorial-host-cleopatra.webp";

const sectionsDefinition = {
    page: "heroes",
    tabs: [
        {
            id: 1,
            url: "",
            name: "Intro",
            img: cleopatra,
            show: false,
            dynamicSegments: [":heroId"],
        },
        {
            id: 2,
            url: "guide",
            name: "Info",
            img: "https://i.ibb.co/nRvy33n/event-widget-backer-time-Paradox-2021.png",
            show: false,
            dynamicSegments: [],
        },
    ]
}

export default sectionsDefinition;