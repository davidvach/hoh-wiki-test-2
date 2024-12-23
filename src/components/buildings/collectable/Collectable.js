import "./Collectable.css";

import { useState, useEffect } from "react";

import SelectBox from "../../shared/SelectBox";
import Prologue from "../../shared/Prologue";
import SectionDivider from "../../shared/SectionDivider";
import useOptionURL from "../../shared/hooks/useOptionURL";
import H1 from "../../shared/H1";
import Image from "../../shared/Image";
import TextBlock from "../../shared/TextBlock";
import Icon from "../../shared/Icon";
import { getItemIcon } from "../../shared/utils";
import Card from "../../shared/Card";
import CardContainer from "../../shared/CardContainer";
import BuildingsHandler from "../../shared/BuildingsHandler";

import { collectableBuildings } from "../_data/collectableBuildings";
import { school, minoanWatchtower, architectsStudio } from "../_data/collectableBuildingsImages";
import allEras from "../_data/eras";

import icon_hud_build from "../../../images/buildings/intro/icon_hud_build.webp";
import puzzle_piece from "../../../images/shared/resources/puzzle_piece.webp";

const Collectable = (props) => {

    const basePath = "buildings";
    const pageName = "Buildings - Collectable";

    const optionsColors = {"StoneAge":"#be6061", "BronzeAge":"#e9942e", "MinoanEra":"#5cc299", "ClassicGreece":"#5a98bd", "EarlyRome":"#686cc5", "RomanEmpire": "#be6061", "ByzantineEra": "#e9942e",
        "AgeOfTheFranks": "#5cc299", "FeudalAge": "#5a98bd", "IberianEra": "#686cc5", "KingdomOfSicily": "#be6061"
    };

    const options = [
        {value: "MinoanWatchtower", label: "Minoan Watchtower", image: puzzle_piece},
        {value: "School", label: "School", image: puzzle_piece},
        {value: "ArchitecsStudio", label: "Scholars Lyceum", image: puzzle_piece},
    ];   

    const [selectedOption, setSelectedOption] = useState(options[0]);

    useEffect(() => {
        const hashParams = new URLSearchParams(window.location.hash.substring(window.location.hash.indexOf('?') + 1));
        const selectedOptionParam = hashParams.get('building');
        if (selectedOptionParam) {
            const foundOption = options.find(option => option.value == selectedOptionParam);
            if (foundOption) {
                setSelectedOption(foundOption);
            }
        }
    }, []);

    const handleOptionChange = (selectedOption) => {
        setSelectedOption(selectedOption);
        const newUrl = `/#/buildings/collectable/?building=${selectedOption.value}`;
        window.history.pushState({ path: newUrl }, '', newUrl);
    };

    let buildings;
  
    switch (selectedOption.value) {
        case "School": buildings = school; break;
        case "MinoanWatchtower": buildings = minoanWatchtower; break;
        case "ArchitecsStudio": buildings = architectsStudio; break;
    }
  
    return (
        <>
            <Prologue imageSrc={icon_hud_build} alt={"Buildings"} maxHeight={"65px"} >
                This is an overview of all the collectible buildings in the game. The pieces required to construct and upgrade these buildings can be found in various parts of the game, such as Treasure Hunts, Events, and more.
            </Prologue>
            <SectionDivider/>

            <H1 center={true}>Collectable Buildings</H1><br/>

            <SelectBox
                options={options}
                width={"50%"}
                color={"#f2f1ed"}
                selectedOption={selectedOption}
                onOptionChange={handleOptionChange}
            />

            <BuildingsHandler buildingsData={collectableBuildings} buildingsImages={buildings} cityType={'capitalCity'}/>
        </>
    );
  };
  
  export default Collectable;