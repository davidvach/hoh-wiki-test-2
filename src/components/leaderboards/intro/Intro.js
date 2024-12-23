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

import allLeaderboards from "../data";
import icon_ranking_points from "../../../images/leaderboards/intro/icon_ranking_points.webp";

const Intro = (props) => {

    const basePath = "leaderboards";
    const pageName = "Leaderboards";
  
    const getLeaderboard = () => {
        return allLeaderboards.find(oneLeaderboards => oneLeaderboards.id == props.selectedLeaderboard);
    }

    const leaderboard = getLeaderboard();
  
    return (
        <>
            <Prologue imageSrc={leaderboard.image} alt={"Leaderboards"} maxHeight={"65px"} >
                Leaderboard events are various types of small events that run for several days and challenge you with particular tasks to achieve milestones. By completing these tasks you receive trophies, that boost
                your position in the ranking of 100 randomly selected players.
            </Prologue>

            <SectionDivider />

            <H1 center={true}>{leaderboard.name}</H1>

            <Image src={leaderboard.image} maxHeight={"100px"} spacing={true} />

            <TextBlock>
                {leaderboard.name} is a Leaderboard event that spans several days, challenging you to complete specific tasks to achieve milestones.
                Earning trophies boosts your position in the rankings, unlocking additional rewards that can be claimed once the event concludes.
            </TextBlock>

            <CardContainer 
            card1={
                <Card title={"<b>Schedule on Live Servers</b>"} centered backgroundImage={leaderboard.background} blurred={false} footer={leaderboard.startDate + " - " + leaderboard.endDate}></Card>
            }
            style={{ marginTop: '20px', marginBottom: '20px' }}
            >
            </CardContainer>

            <TextBlock>
                {leaderboard.description}<br/><br/>
                To learn more, visit the <b>Milestones</b> and <b>Ranking</b> tabs to see the available prizes during this event.
            </TextBlock>

        </>
    );
  };
  
  export default Intro;