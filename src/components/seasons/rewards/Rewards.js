import "./Rewards.css";

import Prologue from "../../shared/Prologue";
import SectionDivider from "../../shared/SectionDivider";
import TextBlock from "../../shared/TextBlock";
import H1 from "../../shared/H1";
import Image from "../../shared/Image";
import Icon from "../../shared/Icon";
import { getItemIcon } from "../../shared/utils";
import allSeasons from "../data";
import seasonsCheckpoints from "../_data/seasonsCheckpoints";

import icon_reward_season_pass from "../../../images/seasons/rewards/icon_reward_season_pass.webp";
import icon_silver_ticket from "../../../images/seasons/rewards/icon_silver_ticket.webp";
import icon_golden_ticket from "../../../images/seasons/rewards/icon_golden_ticket.webp";
import icon_seasonpass_progress from "../../../images/seasons/intro/icon_seasonpass_progress.webp";

const Rewards = (props) => {

    const getSeason = () => {
        return allSeasons.find(oneSeason => oneSeason.id == props.selectedSeason);
    }

    const season = getSeason();

    return <>
        <Prologue imageSrc={icon_reward_season_pass} alt={"Seasons"} maxHeight={"65px"}>
            This is an overview of all rewards and their requirements of the season.
        </Prologue>

        <SectionDivider/>
        <TextBlock>

            <H1 center={true}>Rewards</H1>

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
                            <td><Image src={icon_silver_ticket} maxHeight={'80px'}/></td>
                            <td><Image src={icon_golden_ticket} maxHeight={'80px'}/></td>
                        </tr>
                        {
                            season.rewards && season.rewards.map((oneReward) => (
                                <tr style={{ height: '70px' }}>
                                    <th>{oneReward.id}</th>
                                    <td>{oneReward.cost} {getItemIcon("seasonpass_progress")}</td>
                                    <td>{oneReward.free.amount}x {getItemIcon(oneReward.free.resource)}</td>
                                    <td>{oneReward.premium.amount}x {getItemIcon(oneReward.premium.resource)}</td>
                                </tr>
                            ))
                        }
                        {
                            season.codeName && seasonsCheckpoints[season.codeName][0].map((checkpoint) => (
                                <tr style={{ height: '70px'}}>
                                    <th>{checkpoint.order}</th>
                                    <td>{checkpoint.requiredProgress} {getItemIcon("seasonpass_progress")}</td>
                                    <td>{checkpoint.regularRewards[0].amount}x {getItemIcon(checkpoint.regularRewards[0].resource)}</td>
                                    <td>{checkpoint.premiumRewards[0].amount}x {getItemIcon(checkpoint.premiumRewards[0].resource)}</td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
            </div>

        </TextBlock>
    </>
}

export default Rewards;