import "./Ascension.css";

import Prologue from "../../shared/Prologue";
import SectionDivider from "../../shared/SectionDivider";
import resources from "../../shared/data/resources";
import Icon from "../../shared/Icon";
import { leftJoinArrays, getItemIcon } from "../../shared/utils";
import { Link } from "react-router-dom";

import icon_war_horn from "../../../images/shared/resources/icon_war_horn.webp";

const Ascension = () => {

    const ascensionAdditionalData = [
        {id: "charta_terrestre", description1: "Campaign from 17-3", description2: "Ascension of _ heroes", link: <Link to="/heroes?ascensionMaterial=charta_terrestre" className="text-link">these</Link>},
        {id: "crested_guidon", description1: "Campaign from 17-1", description2: "Ascension of _ heroes", link: <Link to="/heroes?ascensionMaterial=crested_guidon" className="text-link">these</Link>},
        {id: "folio_of_enlightenment", description1: "Treasure Hunt", description2: "Ascension of _ heroes", link: <Link to="/heroes?ascensionMaterial=folio_of_enlightenment" className="text-link">these</Link>},
        {id: "fragrant_potpourri", description1: "Campaign from 9-4", description2: "Ascension of _ heroes", link: <Link to="/heroes?ascensionMaterial=fragrant_potpourri" className="text-link">these</Link>},
        {id: "gilded_pennant", description1: "Campaign from 32-1", description2: "Ascension of _ heroes", link: <Link to="/heroes?ascensionMaterial=gilded_pennant" className="text-link">these</Link>},
        {id: "herbal_poultice", description1: "Campaign from 17-4", description2: "Ascension of _ heroes", link: <Link to="/heroes?ascensionMaterial=herbal_poultice" className="text-link">these</Link>},
        {id: "hortus_sanitatis", description1: "Campaign from 32-4", description2: "Ascension of _ heroes", link: <Link to="/heroes?ascensionMaterial=hortus_sanitatis" className="text-link">these</Link>},
        {id: "prism_of_fate", description1: "", description2: "Ascension of _ heroes", link: <Link to="/heroes?ascensionMaterial=prism_of_fate" className="text-link">these</Link>},
        {id: "shadow_dial", description1: "Campaign from 9-3", description2: "Ascension of _ heroes", link: <Link to="/heroes?ascensionMaterial=shadow_dial" className="text-link">these</Link>},
        {id: "stardust_quartz", description1: "", description2: "Ascension of _ heroes", link: <Link to="/heroes?ascensionMaterial=stardust_quartz" className="text-link">these</Link>},
        {id: "tesla_core", description1: "Tesla Storms", description2: "Ascension of _ heroes", link: <Link to="/heroes?ascensionMaterial=tesla_core" className="text-link">these</Link>},
        {id: "travelers_compass", description1: "Campaign from 32-3", description2: "Ascension of _ heroes", link: <Link to="/heroes?ascensionMaterial=travelers_compass" className="text-link">these</Link>},
        {id: "war_horn", description1: "Campaign from 9-1", description2: "Ascension of _ heroes", link: <Link to="/heroes?ascensionMaterial=war_horn" className="text-link">these</Link>},
    ]

    const goodsExpanded = leftJoinArrays(ascensionAdditionalData, resources);

    return <>
        <Prologue imageSrc={icon_war_horn} alt={"Provinces"} maxHeight={"65px"}>
        Ascension materials are a special type of resource needed to elevate your heroes to higher levels. 
        They can be found in various locations throughout the game, including campaign provinces and Treasure Hunts. For detailed information on which heroes require specific ascension materials, visit the <Link to="/heroes" className="text-link">Heroes Page</Link>. 
        Alternatively, navigate through the links below to directly access specific hero groups.
        </Prologue>
        <SectionDivider/>
        <table style={{width: '80%'}}>
            <thead>
                <tr>
                    <th style={{width: '30%'}}>Name</th>
                    <th style={{width: '10%'}}>Icon</th>
                    <th style={{width: '30%'}}>Where to get</th>
                    <th style={{width: '30%'}}>Usage</th>
                </tr>
            </thead>
            <tbody>
                {
                    goodsExpanded.map((material) => (
                        <tr>
                            <td>{material.name}</td>
                            <td>{getItemIcon(material.id)}</td>
                            <td>{material.description1}</td>
                            <td>{material.description2.split("_")[0]}{material.link}{material.description2.split("_")[1]}</td>
                        </tr>
                    ))
                }
            </tbody>
        </table>
    </>
}

export default Ascension;