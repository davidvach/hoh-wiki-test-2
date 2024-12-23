import "./Provinces.css";

import { useState, useEffect } from "react";

import SelectBox from "../../shared/SelectBox";
import Prologue from "../../shared/Prologue";
import SectionDivider from "../../shared/SectionDivider";

import allProvinces from "../data";
import TableProvince from "./TableProvince";
import TableFinalRewards from "./TableFinalRewards";

import icon_expansion_city_capital_land from "../../../images/campaign/provinces/icon_expansion_city_capital_land.webp";

const Provinces = () => {

    const basePath = "campaign";
    const pageName = "Campaign - Provinces";

    const optionsColors = {"panganea":"#76cc66", "desert_valley":"#d1b077", "early_rome":"#48805f", "mayan":"#669829", "fjords":"#489bb7"};

    const options = allProvinces.map((oneProvince) => {
        return {value: oneProvince.id, label: `${oneProvince.id} - ${oneProvince.name}`, dotColor: optionsColors[oneProvince?.location]}
    });

    const [selectedOption, setSelectedOption] = useState(options[0]);

    const getProvince = (option) => {
        return allProvinces.find(oneProvince => oneProvince.id == option.value);
    }

    useEffect(() => {
        const hashParams = new URLSearchParams(window.location.hash.substring(window.location.hash.indexOf('?') + 1));
        const selectedOptionParam = hashParams.get('region');
        if (selectedOptionParam) {
            const foundOption = options.find(option => option.value == selectedOptionParam);
            if (foundOption) {
                setSelectedOption(foundOption);
            }
        }
    }, []);

    const handleOptionChange = (selectedOption) => {
        setSelectedOption(selectedOption);
        const newUrl = `/#/campaign/provinces/?region=${selectedOption.value}`;
        window.history.pushState({ path: newUrl }, '', newUrl);
    };

    return <>
        <Prologue imageSrc={icon_expansion_city_capital_land} alt={"Provinces"} maxHeight={"65px"}>This is an overview of all Regions and their possible rewards.</Prologue>
        <SelectBox
            options={options}
            width={"50%"}
            color={"#f2f1ed"}
            selectedOption={selectedOption}
            onOptionChange={handleOptionChange}
        />
        <SectionDivider/>
        <div style={{ display: "flex", justifyContent: "center", alignItems: "center", marginTop: "15px", marginBottom: "15px" }}>
            <img src={getProvince(selectedOption)?.img} style={{ maxHeight: '200px', maxWidth: '90%' }} />
        </div>
        <TableProvince data={getProvince(selectedOption)}/>
        <TableFinalRewards data={getProvince(selectedOption)}/>
    </>
}

export default Provinces;