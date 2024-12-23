import "./Layouts.css";

import { useState, useEffect} from "react";

import Prologue from "../../shared/Prologue";
import SelectBox from "../../shared/SelectBox";
import SectionDivider from "../../shared/SectionDivider";
import useOptionURL from "../../shared/hooks/useOptionURL";
import { getItem } from "../../shared/utils";
import Image from "../../shared/Image";
import TextBlock from "../../shared/TextBlock";
import H1 from "../../shared/H1";
import LayoutsBook from "./LayoutsBook";

import allAlliedCultures from "../data";

import layouts_icon from "../../../images/allied-cultures/layouts/Technology_Roman_Empire_Urban_Management.webp";
import layout_1_sector_1 from "../../../images/allied-cultures/strategies/layout_1_sector_1.webp";
import layout_1_sector_2 from "../../../images/allied-cultures/strategies/layout_1_sector_2.webp";
import layout_1_sector_3 from "../../../images/allied-cultures/strategies/layout_1_sector_3.webp";
import layout_2_sector_1 from "../../../images/allied-cultures/strategies/layout_2_sector_1.webp";
import layout_2_sector_2 from "../../../images/allied-cultures/strategies/layout_2_sector_2.webp";
import layout_2_sector_3 from "../../../images/allied-cultures/strategies/layout_2_sector_3.webp";
import layout_3_sector_1 from "../../../images/allied-cultures/strategies/layout_3_sector_1.webp";
import layout_3_sector_2 from "../../../images/allied-cultures/strategies/layout_3_sector_2.webp";
import layout_3_sector_3 from "../../../images/allied-cultures/strategies/layout_3_sector_3.webp";
import layout_4_sector_1 from "../../../images/allied-cultures/strategies/layout_4_sector_1.webp";
import layout_4_sector_2 from "../../../images/allied-cultures/strategies/layout_4_sector_2.webp";
import layout_4_sector_3 from "../../../images/allied-cultures/strategies/layout_4_sector_3.webp";
import layout_5_sector_1 from "../../../images/allied-cultures/strategies/layout_5_sector_1.webp";
import layout_5_sector_2 from "../../../images/allied-cultures/strategies/layout_5_sector_2.webp";
import layout_5_sector_3 from "../../../images/allied-cultures/strategies/layout_5_sector_3.webp";
import layout_egypt_1_sector_1 from "../../../images/allied-cultures/strategies/layout_egypt_1_sector_1.webp";
import layout_egypt_1_sector_2 from "../../../images/allied-cultures/strategies/layout_egypt_1_sector_2.webp";
import layout_egypt_2_sector_1 from "../../../images/allied-cultures/strategies/layout_egypt_2_sector_1.webp";
import layout_egypt_2_sector_2 from "../../../images/allied-cultures/strategies/layout_egypt_2_sector_2.webp";
import layout_egypt_3_sector_1 from "../../../images/allied-cultures/strategies/layout_egypt_3_sector_1.webp";
import layout_egypt_3_sector_2 from "../../../images/allied-cultures/strategies/layout_egypt_3_sector_2.webp";
import layout_egypt_3_sector_3 from "../../../images/allied-cultures/strategies/layout_egypt_3_sector_3.webp";
import layout_egypt_4_sector_1 from "../../../images/allied-cultures/strategies/layout_egypt_4_sector_1.webp";
import layout_egypt_4_sector_2 from "../../../images/allied-cultures/strategies/layout_egypt_4_sector_2.webp";
import layout_egypt_4_sector_3 from "../../../images/allied-cultures/strategies/layout_egypt_4_sector_3.webp";
import layout_vikings_1_sector_1 from "../../../images/allied-cultures/strategies/layout_vikings_1_sector_1.webp";
import layout_vikings_2_sector_1 from "../../../images/allied-cultures/strategies/layout_vikings_2_sector_1.webp";
import layout_vikings_3_sector_1 from "../../../images/allied-cultures/strategies/layout_vikings_3_sector_1.webp";
import layout_vikings_3_sector_2 from "../../../images/allied-cultures/strategies/layout_vikings_3_sector_2.webp";
import layout_vikings_4_sector_1 from "../../../images/allied-cultures/strategies/layout_vikings_4_sector_1.webp";
import layout_vikings_4_sector_2 from "../../../images/allied-cultures/strategies/layout_vikings_4_sector_2.webp";
import layout_vikings_4_sector_3 from "../../../images/allied-cultures/strategies/layout_vikings_4_sector_3.webp";
import layout_vikings_5_sector_1 from "../../../images/allied-cultures/strategies/layout_vikings_5_sector_1.webp";
import layout_vikings_5_sector_2 from "../../../images/allied-cultures/strategies/layout_vikings_5_sector_2.webp";
import layout_vikings_5_sector_3 from "../../../images/allied-cultures/strategies/layout_vikings_5_sector_3.webp";
import layout_vikings_6_sector_1 from "../../../images/allied-cultures/strategies/layout_vikings_6_sector_1.webp";
import layout_vikings_6_sector_2 from "../../../images/allied-cultures/strategies/layout_vikings_6_sector_2.webp";
import layout_vikings_6_sector_3 from "../../../images/allied-cultures/strategies/layout_vikings_6_sector_3.webp";
import layout_vikings_6_sector_4 from "../../../images/allied-cultures/strategies/layout_vikings_6_sector_4.webp";

const Layouts = (props) => {
    // virtual-graph-paper dot com
    const basePath = "allied-cultures";
    const pageName = "Allied Cultures - Layouts";
    
    const getAlliedCulture = () => {
        return allAlliedCultures.find(oneAlliedCulture => oneAlliedCulture.id == props.selectedAlliedCulture);
    }

    const alliedCulture = getAlliedCulture();

    const egyptCultures = ["egypt_cheops_pyramid", "egypt_great_sphinx", "egypt_abu_simbel"];
    const chinaCultures = ["china_terracotta_army", "china_great_wall", "china_forbidden_city"];
    const vikingsCultures = ["vikings_yggdrasil", "vikings_ellida", "vikings_valhalla"];
  
    return (
      <>
        <Prologue imageSrc={layouts_icon} alt={"Strategies"} maxHeight={"65px"} >
            This guide is a subset of the information provided in the <b>Strategies</b> tab. It will help you to more easily follow the suggested layouts for your Allied City. To read more comprehensive
            guide, including details explaining the progress of the Allied Culture, visit the <b>Strategies</b> tab.
        </Prologue>
        
        <SectionDivider />

            <H1 center={true}>Layouts</H1>

            <Image src={alliedCulture?.image} alt="" spacing={true} maxHeight={'150px'}/>

            {
                egyptCultures.includes(alliedCulture.id) ? (
                    <TextBlock>
                        <ul><li>Layout up to level 7 of the World Wonder:</li></ul>

                        <LayoutsBook header={"Layout 1"} images={[layout_egypt_1_sector_1,layout_egypt_1_sector_2]} />

                        <ul><li>Layout up to level 13 of the World Wonder (great focus on generating Deben, to unlock technologies quickly):</li></ul>

                        <LayoutsBook header={"Layout 2"} images={[layout_egypt_2_sector_1,layout_egypt_2_sector_2]} />

                        {
                            alliedCulture.id === "egypt_great_sphinx" ? (
                                <span>
                                    <ul><li>Layout up to level 24 of the World Wonder (focus on workshops):</li></ul>

                                    <LayoutsBook header={"Layout 3"} images={[layout_egypt_3_sector_1,layout_egypt_3_sector_2,layout_egypt_3_sector_3]} />

                                    <ul><li>Layout after level 24 of the World Wonder (all expansions available and focus on workshops):</li></ul>

                                    <LayoutsBook header={"Layout 4"} images={[layout_egypt_4_sector_1,layout_egypt_4_sector_2,layout_egypt_4_sector_3]} />
                                </span>
                            ) : alliedCulture.id === "egypt_abu_simbel" ? (
                                <span>
                                    <ul><li>We are currently working on the next sections of this guide to help you with the final layouts of the Egypt city,
                                    and we plan to have it ready for the upcoming events.</li></ul>
                                </span>
                            ) : alliedCulture.id === "egypt_cheops_pyramid" ? (
                                <span>
                                    <ul><li>We are currently working on the next sections of this guide to help you with the final layouts of the Egypt city,
                                    and we plan to have it ready for the upcoming events.</li></ul>
                                </span>
                            ) : (
                                <span>
                                    Missing content!
                                </span>
                            )
                        }

                    </TextBlock>
                ) : chinaCultures.includes(alliedCulture.id) ? (
                    <TextBlock>
                        <ul><li>Layout up to level 13 of the World Wonder:</li></ul>

                        <LayoutsBook header={"Layout 1"} images={[layout_1_sector_1,layout_1_sector_2,layout_1_sector_3]} />

                        <ul><li>Layout up to level 17 of the World Wonder (discovered Kaolin Quarries and additional production buildings):</li></ul>

                        <LayoutsBook header={"Layout 2"} images={[layout_2_sector_1,layout_2_sector_2,layout_2_sector_3]} />

                        <ul><li>Layout after the research is completed (more production buildings):</li></ul>

                        <LayoutsBook header={"Layout 3"} images={[layout_3_sector_1,layout_3_sector_2,layout_3_sector_3]} />

                        <ul><li>Layout after level 24 of the World Wonder (once all free expansions are available):</li></ul>

                        <LayoutsBook header={"Layout 4"} images={[layout_4_sector_1,layout_4_sector_2,layout_4_sector_3]} />

                        <ul><li>Layout containing more Rice Farms and Porcelain production buildings to ensure sufficient resource output in the final part of the event:</li></ul>

                        <LayoutsBook header={"Layout 5"} images={[layout_5_sector_1,layout_5_sector_2,layout_5_sector_3]} />

                        <ul><li>You may need to slightly adjust this final layout based on your specific needs and the level of activity you maintained during the event (i.e., the reserves you've accumulated).
                        If the current World Wonder provides a bonus for Rice, consider removing some Rice Farms to make space for other buildings you might need.</li></ul>

                    </TextBlock>
                ) : vikingsCultures.includes(alliedCulture.id) ? (
                    <TextBlock>
                        <ul><li>Layout up to level 2 of the World Wonder:</li></ul>

                        <LayoutsBook header={"Layout 1"} images={[layout_vikings_1_sector_1]} />

                        <ul><li>Layout up to level 7 of the World Wonder:</li></ul>

                        <LayoutsBook header={"Layout 2"} images={[layout_vikings_2_sector_1]} />

                        <ul><li>Layout up to level 13 of the World Wonder:</li></ul>

                        <LayoutsBook header={"Layout 3"} images={[layout_vikings_3_sector_1,layout_vikings_3_sector_2]} />

                        <ul><li>Layout up to level 17 of the World Wonder:</li></ul>

                        <LayoutsBook header={"Layout 4"} images={[layout_vikings_4_sector_1,layout_vikings_4_sector_2,layout_vikings_4_sector_3]} />

                        <ul><li>Layout up to level 24 of the World Wonder:</li></ul>

                        <LayoutsBook header={"Layout 5"} images={[layout_vikings_5_sector_1,layout_vikings_5_sector_2,layout_vikings_5_sector_3]} />

                        <ul><li>Layout after all possible expansions are obtained:</li></ul>

                        <LayoutsBook header={"Layout 6"} images={[layout_vikings_6_sector_1,layout_vikings_6_sector_2,layout_vikings_6_sector_3,layout_vikings_6_sector_4]} />

                        <ul><li>You may need to slightly adjust this final layout based on your specific needs and the level of activity you maintained during the event (i.e., the reserves you've accumulated).
                        If the current World Wonder provides a bonus for Pennies, consider replacing a few houses with additional Beehives and vice versa.</li></ul>

                    </TextBlock>
                ) : null
            }

            <TextBlock>
                Take a look at the <b>Strategies</b> tab for a more comprehensive guide and explanations of these layouts.
            </TextBlock>
      </>
    );
}

export default Layouts;