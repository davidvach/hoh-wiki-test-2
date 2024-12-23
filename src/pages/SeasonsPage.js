import { useState, useEffect } from "react";

import Container from "../components/shared/Container";
import SelectBox from "../components/shared/SelectBox";
import useOptionURL from "../components/shared/hooks/useOptionURL";
import { Link } from "react-router-dom";
import ReactGA from "react-ga4";

import layoutSeasons from "../components/seasons/sectionsDefinition";
import allSeasons from "../components/seasons/data";
import Intro from "../components/seasons/intro/Intro";
import Rewards from "../components/seasons/rewards/Rewards";
import Heroes from "../components/seasons/heroes/Heroes";

const SeasonsPage = (props) => {

    const basePath = "seasons";

    ReactGA.send({
        hitType: "pageview",
        page: `/#/${basePath}`,
        title: `Seasons - ${props.tab.name}`,
    });

    const pageName = props.tab.url ? (
        <span>
            <Link to={`/${basePath}`} className="text-link-white">Seasons</Link> &gt; {props.tab.name}
        </span>
    ) : "Seasons";
      
    const options = allSeasons.map((oneSeason) => {
        return { value: oneSeason.id, label: `${oneSeason.name}`, image: oneSeason.image };
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
        const newUrl = `/#/seasons/${props.tab.url}?id=${selectedOption.value}`;
        window.history.pushState({ path: newUrl }, '', newUrl);
    };

    const selectedSeason = selectedOption.value;

    const renderSelectedTab = () => {
      switch (props.tab.url) {
          case "rewards":
              return <Rewards tab={props.tab} selectedSeason={selectedSeason} />;
          case "heroes":
              return <Heroes tab={props.tab} selectedSeason={selectedSeason} />;
          default:
              return <Intro tab={props.tab} selectedSeason={selectedSeason} />;
      }
  };
  
    return (
      <Container basePath={basePath} tabs={layoutSeasons.tabs} pageName={pageName} selectBox={
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
  
  export default SeasonsPage;