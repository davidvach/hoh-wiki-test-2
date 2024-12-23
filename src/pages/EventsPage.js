import { useState, useEffect } from "react";

import Container from "../components/shared/Container";
import SelectBox from "../components/shared/SelectBox";
import useOptionURL from "../components/shared/hooks/useOptionURL";
import { Link } from "react-router-dom";
import ReactGA from "react-ga4";
import { useParams } from "react-router-dom";

import layoutEvents from "../components/events/sectionsDefinition";
import allEvents from "../components/events/data";
import Intro from "../components/events/intro/Intro";
import Quests from "../components/events/quests/Quests";
import DailySpecials from "../components/events/daily-specials/DailySpecials";
import Customizations from "../components/events/customizations/Customizations";
import GrandPrizes from "../components/events/grand-prizes/GrandPrizes";

import sectionsDefinition from "../components/events/sectionsDefinition";

const EventsPage = (props) => {

    const basePath = "events";

    ReactGA.send({
        hitType: "pageview",
        page: `/#/${basePath}`,
        title: `Events - ${props.tab.name}`,
    });

    const { customizationId } = useParams();

    const pageName = props.tab.url ? (
        <span>
            <Link to={`/${basePath}`} className="text-link-white">Events</Link> &gt; {props.tab.name}
        </span>
    ) : "Events";
      
    const options = allEvents.map((oneEvent) => {
        return { value: oneEvent.id, label: `${oneEvent.name}`, image: oneEvent.image };
    });

    const [selectedOption, setSelectedOption] = useState(options[0]);

    useEffect(() => {
        const hashParams = new URLSearchParams(window.location.hash.substring(window.location.hash.indexOf('?') + 1));
        const selectedOptionParam = hashParams.get('id');
        if (selectedOptionParam) {
            const foundOption = options.find(option => option.value == selectedOptionParam);
            if (foundOption) {
                setSelectedOption(foundOption);
            }
        }
    }, []);

    const handleOptionChange = (selectedOption) => {
        setSelectedOption(selectedOption);
        const newUrl = `/#/events/${props.tab.url}?id=${selectedOption.value}`;
        window.history.pushState({ path: newUrl }, '', newUrl);
    };

    const selectedEvent = selectedOption.value;
    
    sectionsDefinition.tabs[0].img = selectedOption.image;
   
    const event = allEvents.find((oneEvent) => oneEvent.id === selectedEvent);
    if (event.questlines === undefined) {
        if (event.leaderboard) {
            sectionsDefinition.tabs[2].name = "Leaderboard";
            sectionsDefinition.tabs[2].img = event.questsIcon;
        }
    }
    if (event.leaderboard === undefined) {
        if (event.questlines) {
            sectionsDefinition.tabs[2].name = "Quests";
            sectionsDefinition.tabs[2].img = event.questsIcon;
        }
    }

    const renderSelectedTab = () => {
      switch (props.tab.url) {
          case "quests":
              return <Quests tab={props.tab} selectedEvent={selectedEvent} />;
          case "daily-specials":
              return <DailySpecials tab={props.tab} selectedEvent={selectedEvent} />;
          case "customizations":
              return <Customizations tab={props.tab} selectedEvent={selectedEvent} customizationId={customizationId}/>;
          case "grand-prizes":
              return <GrandPrizes tab={props.tab} selectedEvent={selectedEvent} />;
          default:
              return <Intro tab={props.tab} selectedEvent={selectedEvent} />;
      }
  };
  
    return (
      <Container basePath={basePath} tabs={layoutEvents.tabs} pageName={pageName} selectBox={
          <SelectBox
              options={options}
              width={"400px"}
              mobileWidth={"350px"}
              height={"32px"}
              color={"#EFEADA"}
              selectedOption={selectedOption}
              onOptionChange={handleOptionChange}
              className="custom-selectbox"
          />
      }>
          {renderSelectedTab()}
      </Container>
    );
  };
  
  export default EventsPage;