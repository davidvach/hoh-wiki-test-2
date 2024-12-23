import "./Customizations.css";

import { useState, useEffect } from "react";

import SelectBox from "../../shared/SelectBox";
import Prologue from "../../shared/Prologue";
import SectionDivider from "../../shared/SectionDivider";
import useOptionURL from "../../shared/hooks/useOptionURL";
import H1 from "../../shared/H1";
import Image from "../../shared/Image";
import TextBlock from "../../shared/TextBlock";
import Icon from "../../shared/Icon";
import { getItem } from "../../shared/utils";
import { customizations } from "../../shared/data/customizations";
import _customizations from "../_data/_customizations";
import CustomizationObject from "../../shared/CustomizationObject";
import { customizationsImages } from "../_data/customizationsImages";

import allEvents from "../data";

import icon_selection_kit_customizations_generic from "../../../images/events/customizations/icon_selection_kit_customizations_generic.webp";

const Customizations = (props) => {

    const basePath = "events";
    const pageName = "Events";
  
    const getEvent = () => {
        return allEvents.find(oneEvent => oneEvent.id == props.selectedEvent);
    }

    const event = getEvent();

    var eventCustomizations;

    if (props.customizationId) {
        eventCustomizations = customizations.filter((customization) => customization.id === props.customizationId);
    } else {
        eventCustomizations = customizations.filter((customization) => customization.id.includes(event.id));
    }

    let customizationImages = customizationsImages[getEvent().codeName];

    return (
        <>
            <Prologue imageSrc={icon_selection_kit_customizations_generic} alt={"Events"} maxHeight={"65px"} >
                This is the list of all new customizations introduced during this event.
            </Prologue>

            <SectionDivider />

            <H1 center={true}>Customizations</H1>

            <div style={{ textAlign: 'center' }}>
                <small style={{ fontSize: '11px', color: '#916a17' }}>
                    <i>Note: The rewards offered by these customizations vary depending on your current era. Be sure to set your era on the website using the dropdown menu in the navigation bar.</i>
                </small>
            </div>

            {Object.keys(customizationImages).map((oneCustomizationId) => (
                <CustomizationObject customizationId={oneCustomizationId} img={customizationImages[oneCustomizationId]} obtainableFrom={getEvent().name}/>
            ))}
        </>
    );
  };
  
  export default Customizations;