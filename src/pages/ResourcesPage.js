import { useState, useEffect } from "react";

import ReactGA from "react-ga4";
import Container from "../components/shared/Container";

import layoutResources from "../components/resources/sectionsDefinition";
import Intro from "../components/resources/intro/Intro";
import Goods from "../components/resources/goods/Goods";
import Ascension from "../components/resources/ascension/Ascension";
import Research from "../components/resources/research/Research";
import Crests from "../components/resources/crests/Crests";
import Basic from "../components/resources/basic/Basic";
import { Link } from "react-router-dom";

const ResourcesPage = (props) => {

    const basePath = "resources";

    ReactGA.send({
        hitType: "pageview",
        page: `/#/${basePath}`,
        title: `Resources - ${props.tab.name}`,
    });

    const pageName = props.tab.url ? (
        <span>
            <Link to={`/${basePath}`} className="text-link-white">Resources</Link> &gt; {props.tab.name}
        </span>
    ) : "Resources";

    const renderSelectedTab = () => {
      switch (props.tab.url) {
          case "basic":
              return <Basic tab={props.tab} />;
          case "goods":
              return <Goods tab={props.tab} />;
          case "research":
              return <Research tab={props.tab} />;
          case "ascension":
              return <Ascension tab={props.tab} />;
          case "crests":
              return <Crests tab={props.tab} />;
          default:
              return <Intro tab={props.tab} />;
      }
  };
  
    return (
      <Container basePath={basePath} tabs={layoutResources.tabs} pageName={pageName}>
          {renderSelectedTab()}
      </Container>
    );
  };
  
  export default ResourcesPage;