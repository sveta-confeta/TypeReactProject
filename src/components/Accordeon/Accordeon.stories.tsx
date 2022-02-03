import React, {useState} from 'react';
import {Accordeon} from './Accordeon';
import {action} from "@storybook/addon-actions";


export default {
    title: 'Accordeon stories',
    component: Accordeon,
};
const callback = action("accordeon mode change");//не работает
const gggcallback=action('ggggggg');

export const MenuCollapsedMode = () => <Accordeon title={'menu'}  onClick={callback}  collapsed={true} items={[]}  ggg={gggcallback}/>
export const UsersllapsedMode = () => <Accordeon  ggg={gggcallback} title={'users'}  onClick={callback} collapsed={false} items={[{title: 'Dim',value:1},{title: 'JJJ',value:1},{title: 'Val',value:1}]}/>

export const ModeChanging = () => {
    const [value, setValue] = useState<boolean>(true);
    return  <Accordeon  ggg={gggcallback} title={'users'}  onClick={() => setValue(!value)} collapsed={value} items={[{title: 'Dim',value:1},{title: 'JJJ',value:2},{title: 'Val',value:3}]}/>
};

