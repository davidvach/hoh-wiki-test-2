import "./Intro.css";

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
import Buildings from "./Buildings";

import allBuildings from "../data";
import allEras from "../_data/eras";

import icon_hud_build from "../../../images/buildings/intro/icon_hud_build.webp";

const Intro = (props) => {

    const basePath = "buildings";
    const pageName = "Buildings";

    const optionsColors = {"StoneAge":"#be6061", "BronzeAge":"#e9942e", "MinoanEra":"#5cc299", "ClassicGreece":"#5a98bd", "EarlyRome":"#686cc5", "RomanEmpire": "#be6061", "ByzantineEra": "#e9942e",
        "AgeOfTheFranks": "#5cc299", "FeudalAge": "#5a98bd", "IberianEra": "#686cc5", "KingdomOfSicily": "#be6061"
    };

    const options = allEras.map((oneEra) => {
        return {value: oneEra.id, label: `${oneEra.name}`, dotColor: optionsColors[oneEra?.id]}
    });   

    const [selectedOption, setSelectedOption] = useState(options[0]);

    const getEra = (option) => {
        return allEras.find(oneEra => oneEra.id === option.value);
    }

    useEffect(() => {
        const hashParams = new URLSearchParams(window.location.hash.substring(window.location.hash.indexOf('?') + 1));
        const selectedOptionParam = hashParams.get('era');
        if (selectedOptionParam) {
            const foundOption = options.find(option => option.value == selectedOptionParam);
            if (foundOption) {
                setSelectedOption(foundOption);
            }
        }
    }, []);

    const handleOptionChange = (selectedOption) => {
        setSelectedOption(selectedOption);
        const newUrl = `/#/buildings/?era=${selectedOption.value}`;
        window.history.pushState({ path: newUrl }, '', newUrl);
    };
  
    const getBuildings = () => {
        return allBuildings.filter(oneBuilding => oneBuilding.id.includes(selectedOption.id));
    }

    const buildings = getBuildings();
  
    return (
        <>
            <Prologue imageSrc={icon_hud_build} alt={"Buildings"} maxHeight={"65px"} >
                This is an overview of all the buildings for your Capital City. Use the dropdown menu to select any era from the game and preview the requirements, productions, and benefits of the buildings it offers!
            </Prologue>
            <SectionDivider/>

            <H1 center={true}>Buildings Overview</H1>

            <Image src={getEra(selectedOption).image} maxHeight={140} marginBottom={20}/>

            <SelectBox
                options={options}
                width={"50%"}
                color={"#f2f1ed"}
                selectedOption={selectedOption}
                onOptionChange={handleOptionChange}
            />

            <Buildings selectedEra={selectedOption}/>

        </>
    );
  };
  
  export default Intro;