import React from 'react';
 import { ComponentStory, ComponentMeta } from '@storybook/react';
import {OnOff} from './UncontrollerOnOFF';



export default {
    title: 'UncontrollerOnOff stories',
    component: OnOff,
};


//она хоть и не контролируемая-в нее входят оn с двумя значениями-true, false
export const onMode = () => <OnOff defaultOn={true}  /> //устанавливаем значения по дефолту, в самом файле тоже прописываем это состояние
export const offMode = () => <OnOff defaultOn={false} />

