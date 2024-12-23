import "./Intro.css";

import Prologue from "../../shared/Prologue";
import SectionDivider from "../../shared/SectionDivider";
import TextBlock from "../../shared/TextBlock";
import H1 from "../../shared/H1";
import Image from "../../shared/Image";
import Icon from "../../shared/Icon";
import resources from "../../shared/data/resources";
import ImageWideHeader from "../../shared/ImageWideHeader";
import { getItemIcon } from "../../shared/utils";

import icon_goldfood from "../../../images/resources/intro/icon-goldfood.webp";
import ui_top from "../../../images/resources/intro/ui_top.webp";
import goods from "../../../images/resources/intro/goods.webp";
import icon_storagecapreward_coins from "../../../images/resources/intro/icon_storagecapreward_coins.webp";
import icon_storagecapreward_food from "../../../images/resources/intro/icon_storagecapreward_food.webp";

const Intro = () => {

    return <>
        <Prologue imageSrc={icon_goldfood} alt={"Provinces"} maxHeight={"65px"}>
        The game offers a variety of resources that can be collected through different in-game features. These resources are essential for constructing new buildings, researching technologies, and leveling up your heroes.<br/>
        They are divided into several categories, each with unique methods of acquisition and distinct uses.
        {/*which resources are limited and which are not
        how to increase the storage (by progressing to the next era or purchasing a premium)*/}
        </Prologue>

        <SectionDivider/>
        <TextBlock>

            <H1 center={true}>Resources</H1>
            <br/>
            To follow your current state of resources, take a look at the top menu to find Coins {getItemIcon("coins")} and Food {getItemIcon("food")} (limited by the storage capacity of your current era)
            and most importantly, Goods <Icon resource={goods}/> button to track the unlimited resources you produced in workshops and collected on the campaign map.

            {<Image src={ui_top} alt="" roundedCorners={true} height={'180px'} heightMobile={'100px'} spacing={true}/>}

            The storage capacity for Coins and Food increases each time you unlock the first technology of a new era. If your storage is full, you won't be able to collect more from your houses and farms, 
            but you can still receive them from other sources where they stand as rewards. Further option to increase the storage is to purchase a monthly premium.

            <Image src={icon_storagecapreward_coins} alt="" roundedCorners={true} spacing={true} centered={true}/>

            Heroes of History contains a diverse range of resources and you can find them all within the Tabs at the top of this page.
            
        </TextBlock>
    </>
}

export default Intro;