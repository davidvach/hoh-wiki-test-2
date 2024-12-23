import "./Research.css";

import Prologue from "../../shared/Prologue";
import SectionDivider from "../../shared/SectionDivider";
import Icon from "../../shared/Icon";
import resources from "../../shared/data/resources";
import { leftJoinArrays, getItemIcon } from "../../shared/utils";
import { Link } from "react-router-dom";

import icon_amber from "../../../images/shared/resources/icon_amber.webp";

const Research = () => {

    const researchAdditionalData = [
        {id: "agate", era: "Feudal Age"},
        {id: "amber", era: "Stone Age"},
        {id: "amethyst", era: "Roman Empire"},
        {id: "aquamarine", era: "Iberian Era"},
        {id: "arabesque_wood_carving", era: "Kingdom of Sicily"},
        {id: "byzantine_ewer", era: "Byzantine Era"},
        {id: "emerald", era: "Early Rome"},
        {id: "etruscan_bronze_mirror", era: "Early Rome"},
        {id: "frankish_fibula", era: "Age of the Franks"},
        {id: "greek_lyre", era: "Classic Greece"},
        {id: "hematite", era: "Classic Greece"},
        {id: "iberian_torc_necklace", era: "Iberian Era"},
        {id: "jasper", era: "Minoan Era"},
        {id: "lapis_lazuli", era: "Bronze Age"},
        {id: "lava_stone", era: "Kingdom of Sicily"},
        {id: "medieval_tapestry", era: "Feudal Age"},
        {id: "minoan_frescoes", era: "Minoan Era"},
        {id: "opal", era: "Byzantine Era"},
        {id: "petroglyph", era: "Bronze Age"},
        {id: "roman_cameo_ring", era: "Roman Empire"},
        {id: "spessartine", era: "Age of the Franks"},
    ]

    const goodsExpanded = leftJoinArrays(researchAdditionalData, resources);

    const erasPriorities = ["Stone Age", "Bronze Age", "Minoan Era", "Classic Greece", "Early Rome", "Roman Empire", "Byzantine Era", "Age of the Franks", "Feudal Age", "Iberian Era", "Kingdom of Sicily"];

    const separatedByEras = goodsExpanded.reduce((acc, item) => {
        if (!acc[item.era]) {
            acc[item.era] = [];
        }
        acc[item.era].push(item);
        return acc;
    }, {});

    return <>
        <Prologue imageSrc={icon_amber} alt={"Provinces"} maxHeight={"65px"}>
        Research materials are a unique type of goods required to unlock specific technologies in the research tree. Each era introduces its own set of research materials.
        They are obtainable within the campaign provinces on the world map. For further information on where to collect these research materials and the best odds for acquiring them, visit the <Link to="/campaign" className='text-link'>Campaign Page</Link>.
        </Prologue>
        <SectionDivider/>
        <table style={{width: '70%'}}>
            <thead>
                <tr>
                    <th style={{width: '40%'}}>Era</th>
                    <th style={{width: '30%'}}>Material 1</th>
                    <th style={{width: '30%'}}>Material 2</th>
                </tr>
            </thead>
            <tbody>
                {
                    erasPriorities.map((era) => (
                        <tr>
                            <th>{era}</th>
                            <td>{getItemIcon(separatedByEras[era][0]?.id)} {separatedByEras[era][0]?.name}</td>
                            <td>{getItemIcon(separatedByEras[era][1]?.id)} {separatedByEras[era][1]?.name}</td>
                        </tr>
                    ))
                }
            </tbody>
        </table>
    </>
}

export default Research;