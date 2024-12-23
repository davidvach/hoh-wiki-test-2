import { useState, useEffect } from "react";

import Container from "../components/shared/Container";
import SelectBox from "../components/shared/SelectBox";
import useOptionURL from "../components/shared/hooks/useOptionURL";
import { Link } from "react-router-dom";
import ReactGA from "react-ga4";
import allLeaderboards from "../components/leaderboards/data";
import layoutLeaderboards from "../components/leaderboards/sectionsDefinition";

import Intro from "../components/leaderboards/intro/Intro";
import Milestones from "../components/leaderboards/milestones/Milestones";
import Ranking from "../components/leaderboards/ranking/Ranking";

const LeaderboardsPage = (props) => {

    const basePath = "leaderboards";

    ReactGA.send({
        hitType: "pageview",
        page: `/#/${basePath}`,
        title: `Leaderboards - ${props.tab.name}`,
    });

    const pageName = props.tab.url ? (
        <span>
            <Link to={`/${basePath}`} className="text-link-white">Leaderboards</Link> &gt; {props.tab.name}
        </span>
    ) : "Leaderboards";

    /*const { selectedOption, handleOptionChange } = useOptionURL(options, "id");*/

    const options = allLeaderboards.map((oneLeaderboard) => {
        return { value: oneLeaderboard.id, label: `${oneLeaderboard.name}`, image: oneLeaderboard.image };
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
        const newUrl = `/#/leaderboards/${props.tab.url}?id=${selectedOption.value}`;
        window.history.pushState({ path: newUrl }, '', newUrl);
    };

    layoutLeaderboards.tabs[0].img = selectedOption.image;

    const selectedLeaderboard = selectedOption.value;

    const renderSelectedTab = () => {
      switch (props.tab.url) {
          case "milestones":
                return <Milestones tab={props.tab} selectedLeaderboard={selectedLeaderboard} />;
          case "ranking":
                return <Ranking tab={props.tab} selectedLeaderboard={selectedLeaderboard} />;
          default:
              return <Intro tab={props.tab} selectedLeaderboard={selectedLeaderboard} />;
      }
  };
  
    return (
      <Container basePath={basePath} tabs={layoutLeaderboards.tabs} pageName={pageName} selectBox={
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
  
  export default LeaderboardsPage;