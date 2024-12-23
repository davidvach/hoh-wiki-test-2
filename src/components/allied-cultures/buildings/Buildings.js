import "./Buildings.css";
import "../../shared/Table.css";

import { useState, useEffect} from "react";

import Prologue from "../../shared/Prologue";
import SelectBox from "../../shared/SelectBox";
import SectionDivider from "../../shared/SectionDivider";
import useOptionURL from "../../shared/hooks/useOptionURL";
import H1 from "../../shared/H1";
import Image from "../../shared/Image";
import Icon from "../../shared/Icon";
import { getItemIcon } from "../../shared/utils";
import allied_culture_buildings from "../_data/buildings";
import { egyptBuildings, chinaBuildings, vikingBuildings } from "../_data/buildingsImages";
import { workersIds } from "../_data/workersIds";

import allAlliedCultures from "../data";
import resources from "../../shared/data/resources";
import buildings_icon from "../../../images/allied-cultures/buildings/buildings_icon.webp";
import BuildingsHandler from "../../shared/BuildingsHandler";

const Buildings = (props) => {

    const basePath = "allied-cultures";
    const pageName = "Allied Cultures - Buildings";
  
    const getAlliedCulture = () => {
        return allAlliedCultures.find(oneAlliedCulture => oneAlliedCulture.id == props.selectedAlliedCulture);
    }

    const eventType = getAlliedCulture().type;
    let buildings;

    switch (eventType) {
        case "Egypt": buildings = egyptBuildings; break;
        case "China": buildings = chinaBuildings; break;
        case "Vikings": buildings = vikingBuildings; break;
    }
  
    return (
      <>
        <Prologue imageSrc={buildings_icon} alt={"Event"} maxHeight={"65px"} >
            Use research of the Allied Culture to unlock exclusive buildings. These buildings offer unique workers and produce special resources essential for advancing within the Allied Culture.
        </Prologue>
        <SectionDivider />
        <div style={{ display: "flex", justifyContent: "center", alignItems: "center", marginTop: "15px",marginBottom: "15px" }}>
            
        </div>

        <BuildingsHandler buildingsData={allied_culture_buildings} buildingsImages={buildings} cityType={eventType}/>
      </>
    );
}

export default Buildings;