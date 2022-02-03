import React, {useState} from 'react';
 import { ComponentStory, ComponentMeta } from '@storybook/react';
import {UncontrolledAccordeon} from './AccordeonUncontroller';
import {action} from "@storybook/addon-actions";


export default {
    title: 'AccordeonUncontroller stories',
    component: UncontrolledAccordeon,
};


//компонента не контролируемая-на нее нет воздействия из вне.поэтому сдесь не отдной константы


export const ModeChanging = () => {

    return  <UncontrolledAccordeon title={"User"}/>
};

