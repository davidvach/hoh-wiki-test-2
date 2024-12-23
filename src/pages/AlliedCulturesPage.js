import { useState, useEffect } from "react";

import Container from "../components/shared/Container";
import SelectBox from "../components/shared/SelectBox";
import useOptionURL from "../components/shared/hooks/useOptionURL";
import Quests from "../components/allied-cultures/quests/Quests";
import { Link } from "react-router-dom";
import ReactGA from "react-ga4";
import { addWeeks, differenceInMilliseconds } from 'date-fns';

import layoutEvents from "../components/allied-cultures/sectionsDefinition";
import allAlliedCultures from "../components/allied-cultures/data";
import Intro from "../components/allied-cultures/intro/Intro";
import WorldWonder from "../components/allied-cultures/world-wonder/WorldWonder";
import Strategies from "../components/allied-cultures/strategies/Strategies";
import Buildings from "../components/allied-cultures/buildings/Buildings";
import Layouts from "../components/allied-cultures/layouts/Layouts";

const AlliedCulturesPage = (props) => {

    const basePath = "allied-cultures";

    ReactGA.send({
        hitType: "pageview",
        page: `/#/${basePath}`,
        title: `Allied Cultures - ${props.tab.name}`,
    });

    const pageName = props.tab.url ? (
        <span>
            <Link to={`/${basePath}`} className="text-link-white">Allied Cultures</Link> &gt; {props.tab.name}
        </span>
    ) : "Allied Cultures";
  
    const getCurrentAlliedCultureIndex = (startDate, currentDate, culturesCount) => {
        const oneWeekInMilliseconds = 1000 * 60 * 60 * 24 * 7;
        const timeDifference = currentDate - startDate;
        const weeksPassed = Math.floor(timeDifference / oneWeekInMilliseconds);
        return weeksPassed % culturesCount;
    };
      
    const reorderAlliedCultures = (alliedCultures) => {
        const firstCultureStartDate = new Date(Date.UTC(2024, 7, 29, 12, 0));
        const currentDate = new Date();
        const currentCultureIndex = getCurrentAlliedCultureIndex(firstCultureStartDate, currentDate, alliedCultures.length);
        return [
          ...alliedCultures.slice(currentCultureIndex),
          ...alliedCultures.slice(0, currentCultureIndex),
        ];
    };
      
    const options = reorderAlliedCultures(allAlliedCultures).map((oneAlliedCulture) => {
        return { value: oneAlliedCulture.id, label: `${oneAlliedCulture.name}`, image: oneAlliedCulture.image };
    });

    /*const { selectedOption, handleOptionChange } = useOptionURL(options, "id");*/

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
        const newUrl = `/#/allied-cultures/${props.tab.url}?id=${selectedOption.value}`;
        window.history.pushState({ path: newUrl }, '', newUrl);
    };

    const selectedAlliedCulture = selectedOption.value;

    const renderSelectedTab = () => {
      switch (props.tab.url) {
          case "quests":
              return <Quests tab={props.tab} selectedAlliedCulture={selectedAlliedCulture} />;
          case "buildings":
              return <Buildings tab={props.tab} selectedAlliedCulture={selectedAlliedCulture} />;
          case "world-wonder":
            return <WorldWonder tab={props.tab} selectedAlliedCulture={selectedAlliedCulture} />;
          case "strategies":
            return <Strategies tab={props.tab} selectedAlliedCulture={selectedAlliedCulture} />;
          case "layouts":
            return <Layouts tab={props.tab} selectedAlliedCulture={selectedAlliedCulture} />;
          default:
              return <Intro tab={props.tab} selectedAlliedCulture={selectedAlliedCulture} />;
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
  
  export default AlliedCulturesPage;