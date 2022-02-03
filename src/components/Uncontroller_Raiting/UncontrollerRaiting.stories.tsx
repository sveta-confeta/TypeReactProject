import React, {useState} from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import {UncontrolledRaiting} from './Raiting'

export default {
    title: 'UncontrolledRaiting stories',
    component: UncontrolledRaiting,
};



//в неконтролируемый рейтинг хотябы передавать дефолтное состояние

export const EmptyRaiting = () => <UncontrolledRaiting defaultValue={0} />

export const Raiting1 = () => <UncontrolledRaiting defaultValue={1}   />

export const Raiting2 = () => <UncontrolledRaiting defaultValue={2}   />

export const Raiting3 = () => <UncontrolledRaiting defaultValue={3}   />

export const Raiting4 = () => <UncontrolledRaiting defaultValue={4}  />

export const Raiting5 = () => <UncontrolledRaiting defaultValue={5}  />



