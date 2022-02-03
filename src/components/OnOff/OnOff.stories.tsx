import React, {useState} from 'react';
 import { ComponentStory, ComponentMeta } from '@storybook/react';

import {OnOff,} from './OnOff'
import {action} from "@storybook/addon-actions";

export default {
    title: 'OnOff stories',
    component: OnOff,
};
const callback=action("on or off clicked");//не работает

export const onMode = () => <OnOff on={true}  onClick={callback} />
export const offMode = () => <OnOff on={false}  onClick={callback} />

export const ModeChanging = () => {
    const [value, setValue] = useState<boolean>(true);
    return <OnOff on={value} onClick={setValue}/>
};

