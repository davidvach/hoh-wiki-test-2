import "./OneQuestline.css";

import OneQuest from "./OneQuest";
import H1 from "../../shared/H1";

const OneQuestline = (props) => {
    
    return <div className="questline">
        <H1 center>{props.questline.name}</H1>
        {
            props.questline.quests.map((oneQuest) => (
                <OneQuest questId={oneQuest.id} questline={props.questline} headerColor={props.headerColor}/>
            ))
        }
    </div>
}

export default OneQuestline;