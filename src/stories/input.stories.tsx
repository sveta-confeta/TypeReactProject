import React, {ChangeEvent, useRef, useState} from 'react';
import {OnOff} from "../components/OnOff/OnOff";


export default {
  title: 'input',
  component: OnOff,
};

export let UncontrollInput = () => <input/>

export let TrackingValueInput = () => {
  const[value,setValue]=useState('');
  const onChangeHandler=(e:ChangeEvent<HTMLInputElement>)=>{
    setValue(e.currentTarget.value);
  }
  return <>
    <input value={value} onChange={onChangeHandler}/> -{value}
    </>
}

//пример с рефами:
export let GetTrackingValue = () => {
  const[value,setValue]=useState('');
  const inputRef=useRef<HTMLInputElement>(null);
  const onClickHandler=()=>{const el=inputRef.current as HTMLInputElement
    setValue(el.value)};

  return <>
    <input ref={inputRef}/> <button onClick={onClickHandler}>save</button> - actual value {value}
  </>
}

export let ControlledInput = () => <input value = {'tra-ta-ta'} />

