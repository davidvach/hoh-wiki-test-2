import "./Crests.css";

import Prologue from "../../shared/Prologue";
import SectionDivider from "../../shared/SectionDivider";
import Icon from "../../shared/Icon";
import { leftJoinArrays, getItemIcon } from "../../shared/utils";
import resources from "../../shared/data/resources";
import { Link } from "react-router-dom";

import icon_manipulator_crest_common from "../../../images/shared/resources/icon_manipulator_crest_common.webp";

const Crests = () => {

    const crestsAdditionalData = [
        {id: "red_crest_common", description1: "Red Tesla Storms 1 - 6", description2: "Ascension of _", link: <Link to="/heroes?color=red" className="text-link">Red Heroes</Link>},
        {id: "yellow_crest_common", description1: "Yellow Tesla Storms 1 - 6", description2: "Ascension of _", link: <Link to="/heroes?color=yellow" className="text-link">Yellow Heroes</Link>},
        {id: "green_crest_common", description1: "Green Tesla Storms 1 - 6", description2: "Ascension of _", link: <Link to="/heroes?color=green" className="text-link">Green Heroes</Link>},
        {id: "blue_crest_common", description1: "Blue Tesla Storms 1 - 6", description2: "Ascension of _", link: <Link to="/heroes?color=blue" className="text-link">Blue Heroes</Link>},
        {id: "purple_crest_common", description1: "Purple Tesla Storms 1 - 6", description2: "Ascension of _", link: <Link to="/heroes?color=purple" className="text-link">Purple Heroes</Link>},
        {id: "red_crest_enhanced", description1: "Red Tesla Storms 6 - 9", description2: "Ascension of _", link: <Link to="/heroes?color=red" className="text-link">Red Heroes</Link>},
        {id: "yellow_crest_enhanced", description1: "Yellow Tesla Storms 6 - 9", description2: "Ascension of _", link: <Link to="/heroes?color=yellow" className="text-link">Yellow Heroes</Link>},
        {id: "green_crest_enhanced", description1: "Green Tesla Storms 6 - 9", description2: "Ascension of _", link: <Link to="/heroes?color=green" className="text-link">Green Heroes</Link>},
        {id: "blue_crest_enhanced", description1: "Blue Tesla Storms 6 - 9", description2: "Ascension of _", link: <Link to="/heroes?color=blue" className="text-link">Blue Heroes</Link>},
        {id: "purple_crest_enhanced", description1: "Purple Tesla Storms 6 - 9", description2: "Ascension of _", link: <Link to="/heroes?color=purple" className="text-link">Purple Heroes</Link>},
        {id: "red_crest_superior", description1: "Red Tesla Storms 9 - 15", description2: "Ascension of _", link: <Link to="/heroes?color=red" className="text-link">Red Heroes</Link>},
        {id: "yellow_crest_superior", description1: "Yellow Tesla Storms 9 - 15", description2: "Ascension of _", link: <Link to="/heroes?color=yellow" className="text-link">Yellow Heroes</Link>},
        {id: "green_crest_superior", description1: "Green Tesla Storms 9 - 15", description2: "Ascension of _", link: <Link to="/heroes?color=green" className="text-link">Green Heroes</Link>},
        {id: "blue_crest_superior", description1: "Blue Tesla Storms 9 - 15", description2: "Ascension of _", link: <Link to="/heroes?color=blue" className="text-link">Blue Heroes</Link>},
        {id: "purple_crest_superior", description1: "Purple Tesla Storms 9 - 15", description2: "Ascension of _", link: <Link to="/heroes?color=purple" className="text-link">Purple Heroes</Link>},
        /*{id: "commander_crest_common", description1: "", description2: "Ascension of _", link: <Link to="/heroes?class=commander" className="text-link">Commanders</Link>},
        {id: "manipulator_crest_common", description1: "", description2: "Ascension of _", link: <Link to="/heroes?class=manipulator" className="text-link">Manipulators</Link>},
        {id: "champion_crest_common", description1: "", description2: "Ascension of _", link: <Link to="/heroes?class=champion" className="text-link">Champions</Link>},
        {id: "greatleader_crest_common", description1: "", description2: "Ascension of _", link: <Link to="/heroes?class=great-leader" className="text-link">Great Leaders</Link>},
        {id: "genius_crest_common", description1: "", description2: "Ascension of _", link: <Link to="/heroes?class=genius" className="text-link">Geniuses</Link>},
        {id: "commander_crest_enhanced", description1: "", description2: "Ascension of _", link: <Link to="/heroes?class=commander" className="text-link">Commanders</Link>},
        {id: "manipulator_crest_enhanced", description1: "", description2: "Ascension of _", link: <Link to="/heroes?class=manipulator" className="text-link">Manipulators</Link>},
        {id: "champion_crest_enhanced", description1: "", description2: "Ascension of _", link: <Link to="/heroes?class=champion" className="text-link">Champions</Link>},
        {id: "greatleader_crest_enhanced", description1: "", description2: "Ascension of _", link: <Link to="/heroes?class=great-leader" className="text-link">Great Leaders</Link>},
        {id: "genius_crest_enhanced", description1: "", description2: "Ascension of _", link: <Link to="/heroes?class=genius" className="text-link">Geniuses</Link>},
        {id: "commander_crest_superior", description1: "", description2: "Ascension of _", link: <Link to="/heroes?class=commander" className="text-link">Commanders</Link>},
        {id: "manipulator_crest_superior", description1: "", description2: "Ascension of _", link: <Link to="/heroes?class=manipulator" className="text-link">Manipulators</Link>},
        {id: "champion_crest_superior", description1: "", description2: "Ascension of _", link: <Link to="/heroes?class=champion" className="text-link">Champions</Link>},
        {id: "greatleader_crest_superior", description1: "", description2: "Ascension of _", link: <Link to="/heroes?class=great-leader" className="text-link">Great Leaders</Link>},
        {id: "genius_crest_superior", description1: "", description2: "Ascension of _", link: <Link to="/heroes?class=genius" className="text-link">Geniuses</Link>},*/
    ]

    const goodsExpanded = leftJoinArrays(crestsAdditionalData, resources);

    const separatedByCrestTypes = goodsExpanded.reduce((acc, item) => {
        if (!acc[item.category]) {
            acc[item.category] = [];
        }
        acc[item.category].push(item);
        return acc;
    }, {});

    const crestTypes = ["crests_colors", "crests_factions"];

    return <>
        <Prologue imageSrc={icon_manipulator_crest_common} alt={"Provinces"} maxHeight={"65px"}>
        Each color and faction of heroes possesses its unique set of crests - common, enhanced, and superior. Crests are essential for ascending your heroes to higher levels. 
        While you can collect them through campaign provinces, the primary source of crests is the Tesla Storms feature, providing even more valuable crests for your heroes. 
        To discover which heroes require specific crests, refer to the <Link to="/heroes" className="text-link">Heroes Page</Link>.
        </Prologue>
        <SectionDivider/>
        {separatedByCrestTypes[crestTypes[0]]?.length > 0 && <table style={{width: '80%'}}>
            <thead>
                <tr>
                    <th colSpan={4}>
                        Crests - Colors
                    </th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <th style={{width: '30%'}}>Name</th>
                    <th style={{width: '10%'}}>Icon</th>
                    <th style={{width: '30%'}}>Where to get</th>
                    <th style={{width: '30%'}}>Usage</th>
                </tr>
                {
                    separatedByCrestTypes[crestTypes[0]].map((crest) => (
                        <tr>
                            <td>{crest.name}</td>
                            <td>{getItemIcon(crest.id)}</td>
                            <td>{crest.description1}</td>
                            <td>{crest.description2.split("_")[0]}{crest.link}{crest.description2.split("_")[1]}</td>
                        </tr>
                    ))
                }
            </tbody>
        </table> }
        {separatedByCrestTypes[crestTypes[1]]?.length > 0 && <table style={{width: '80%', marginTop: '10px'}}>
            <thead>
                <tr>
                    <th colSpan={4}>
                        Crests - Factions
                    </th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <th style={{width: '30%'}}>Name</th>
                    <th style={{width: '10%'}}>Icon</th>
                    <th style={{width: '30%'}}>Where to get</th>
                    <th style={{width: '30%'}}>Usage</th>
                </tr>
                {
                    separatedByCrestTypes[crestTypes[1]].map((crest) => (
                        <tr>
                            <td>{crest.name}</td>
                            <td>{getItemIcon(crest.id)}</td>
                            <td>{crest.description1}</td>
                            <td>{crest.description2.split("_")[0]}{crest.link}{crest.description2.split("_")[1]}</td>
                        </tr>
                    ))
                }
            </tbody>
        </table> }
    </>
}

export default Crests;