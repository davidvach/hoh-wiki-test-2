import { NavLink } from "react-router-dom";
import useSelectedTab from "./useSelectedTab";

import "./Tabs.css";

const Tabs = (props) => {

    const selectedTab = useSelectedTab();

    const filteredTabs = props.tabs.filter(tab => tab.show !== false);

    return (
        <div className="tabs-container">
            <section className="section-tabs">
                {
                    filteredTabs.map((tab) => {
                        const {id, url, name, img} = tab;

                        let classNameTabFirst = id === 1 ? "tab tab-first" : "tab";
                        let classNameActive = (selectedTab === url) || (selectedTab === "/undefined" && id === 1) ? "active" : "";

                        return (
                            <div key={id} className={`${classNameTabFirst} ${classNameActive}`}>
                                <NavLink to={`/${props.basePath}/${url}`} className={"link-regular"}>
                                    <img src={img} alt="" style={{verticalAlign: 'middle', marginTop: '-2px'}}/>
                                    <span>{id !== 1 ? name : ""}</span>
                                </NavLink>
                            </div>
                        );
                    })
                }
            </section>
        </div>
    );
}

export default Tabs;
