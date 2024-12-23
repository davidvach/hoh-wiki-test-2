import { useState, useEffect } from "react";

import Container from "../components/shared/Container";
import SelectBox from "../components/shared/SelectBox";
import useOptionURL from "../components/shared/hooks/useOptionURL";
import { Link } from "react-router-dom";
import ReactGA from "react-ga4";
import { useParams } from "react-router-dom";

import layoutBuildings from "../components/buildings/sectionsDefinition";
import allBuildings from "../components/buildings/data";
import Intro from "../components/buildings/intro/Intro";
import Collectable from "../components/buildings/collectable/Collectable";

import sectionsDefinition from "../components/buildings/sectionsDefinition";

const BuildingsPage = (props) => {

    const basePath = "buildings";

    ReactGA.send({
        hitType: "pageview",
        page: `/#/${basePath}`,
        title: `Buildings - ${props.tab.name}`,
    });

    const pageName = props.tab.url ? (
        <span>
            <Link to={`/${basePath}`} className="text-link-white">Buildings</Link> &gt; {props.tab.name}
        </span>
    ) : "Buildings";

    const renderSelectedTab = () => {
      switch (props.tab.url) {
          case "collectable":
            return <Collectable tab={props.tab} />;
          default:
              return <Intro tab={props.tab} />;
      }
  };
  
    return (
      <Container basePath={basePath} tabs={layoutBuildings.tabs} pageName={pageName}>
          {renderSelectedTab()}
      </Container>
    );
  };
  
  export default BuildingsPage;