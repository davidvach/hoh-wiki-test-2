import "./Quests.css";

import { useState, useEffect} from "react";

import Prologue from "../../shared/Prologue";
import SelectBox from "../../shared/SelectBox";
import SectionDivider from "../../shared/SectionDivider";
import useOptionURL from "../../shared/hooks/useOptionURL";
import OneQuest from "./OneQuest";
import OneQuestline from "./OneQuestline";

import allAlliedCultures from "../data";
import quests_icon from "../../../images/allied-cultures/quests/quests_icon.webp";

const Quests = (props) => {

    const basePath = "allied-cultures";
    const pageName = "Allied Cultures - Quests";

    const getAlliedCulture = () => {
        return allAlliedCultures.find(oneAlliedCulture => oneAlliedCulture.id == props.selectedAlliedCulture);
    }
  
    return (
        <>
            <Prologue imageSrc={quests_icon} alt={"Event"} maxHeight={"65px"} >
                Quests introduce players to the story of the allied culture and offer a variety of rewards.
            </Prologue>
            <SectionDivider />
            <div className="questlines-container">
                {
                    getAlliedCulture().questlines?.map((oneQuestline) => (
                        <OneQuestline questline={oneQuestline} headerColor={getAlliedCulture().questlineColor} />
                    ))
                }
            </div>
        </>
    );
}

export default Quests;
