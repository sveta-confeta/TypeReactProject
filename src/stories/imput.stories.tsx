import React, {useState} from 'react';




export default {
    title: 'Textarea stories',
  //  component: Textarea,
};
export  const  UncontrollerTextarea=()=><textarea/>;
export const TrackValue=()=>{
    const[value,setValue]=useState('')
    return <><textarea onChange={(e)=>{
        const actual= e.currentTarget.value;
        setValue(actual);
    }}/>-{value}</>
}
export  const ControlledTextarea=()=><textarea value={'it-incubator'}/>

