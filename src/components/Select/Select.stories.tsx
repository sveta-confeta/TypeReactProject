import React from 'react';
import Select from "./Select";
import {action} from "@storybook/addon-actions";
import {UncontrolledAccordeon} from "../Accordeon Uncontroller/AccordeonUncontroller";


export default {
    title: 'Select stories',
    component: Select,
};
//
export const TTTAAA = () => {

    return <Select value={'1'} onChange={action("value change")} items={[
        {value:1,title:'Minsk'},
        {value:2,title:'Kiev'},
        {value:3,title:'Moskow'},
    ]}/>
};

