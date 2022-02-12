import React, {useState} from 'react';
import Select from "./Select";
import {action} from "@storybook/addon-actions";



export default {
    title: 'Select stories',
    component: Select,
};

export const SelectMode = () => {
    const [value, setValue] = useState('2');
    return <>
        <Select value={value} onChange={setValue} items={[
            {value: '1', title: 'Minsk'},
            {value: '2', title: 'Kiev'},
            {value: '3', title: 'Moskow'},
        ]}/>
    </>
}

export const NotValue = () =>{
const [value, setValue] = useState(null);
return<>
    <Select value={value} onChange={setValue} items={[
        {value:'1',title:'Minsk'},
        {value:'2',title:'Kiev'},
        {value:'3',title:'Moskow'},
    ]}/>
</>
    }
;

