import "./GrandPrizes.css";

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

import allEvents from "../data";

import EventPassGrandPriceChest from "../../../images/events/grand-prizes/EventPassGrandPriceChest.webp";
import EventPassPremiumPriceChest from "../../../images/events/grand-prizes/EventPassPremiumPriceChest.webp";

const GrandPrizes = (props) => {

    const basePath = "events";
    const pageName = "Events";
  
    const getEvent = () => {
        return allEvents.find(oneEvent => oneEvent.id == props.selectedEvent);
    }

    const event = getEvent();
    
    return (
        <>
            <Prologue imageSrc={EventPassGrandPriceChest} alt={"Events"} maxHeight={"65px"} >
                The lane of Grand Prizes is the main sequence of the event. The Free Lane is readily available for all, while the Premium Lane is only available after a one-time investment.<br/>
                Progress <img src={event.payback.image} style={{ maxHeight: '14px', verticalAlign: 'bottom' }}/> is obtained by playing the event's minigame.
            </Prologue>

            <SectionDivider />

            <TextBlock>

                <H1 center={true}>Grand Prizes</H1>

                <div style={{ overflowX: 'auto', marginTop: '20px' }} className="responsive-table-container">
                    <table style={{ width: '100%' }}>
                        <thead>
                            <tr>
                                <th style={{ width: '5%' }}>
                                    #
                                </th>
                                <th>
                                    Costs
                                </th>
                                <th>
                                    Free Lane
                                </th>
                                <th>
                                    Premium Lane
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <th></th>
                                <td></td>
                                <td><Image src={EventPassGrandPriceChest} maxHeight={'80px'}/></td>
                                <td><Image src={EventPassPremiumPriceChest} maxHeight={'80px'}/></td>
                            </tr>
                            {
                                event.grandPrizes.map((oneReward) => (
                                    <tr style={{ height: '70px' }}>
                                        <th>{oneReward.id}</th>
                                        <td>{oneReward.cost} <img src={event.payback.image} style={{ maxHeight: '24px', verticalAlign: 'bottom' }}/></td>
                                        <td>{oneReward.free.amount}x {getItemIcon(oneReward.free.resource)}</td>
                                        <td>{oneReward.premium.amount}x {getItemIcon(oneReward.premium.resource)}</td>
                                    </tr>
                                ))
                            }
                        </tbody>
                    </table>
                </div>

            </TextBlock>
            
        </>
    );
  };
  
  export default GrandPrizes;