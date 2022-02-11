import React, {ChangeEvent, useRef, useState} from 'react';
import {OnOff} from "../components/OnOff/OnOff";


export default {
    title: 'input',
    component: OnOff,
};

export let UncontrollInput = () => <input/>

export let TrackingValueInput = () => {
    const [value, setValue] = useState('');
    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setValue(e.currentTarget.value);
    }
    return <>
        <input value={value} onChange={onChangeHandler}/> -{value}
    </>
}

//пример с рефами:
export let GetTrackingValue = () => {
    const [value, setValue] = useState('');
    const inputRef = useRef<HTMLInputElement>(null);
    const onClickHandler = () => {
        const el = inputRef.current as HTMLInputElement
        setValue(el.value)
    };

    return <>
        <input ref={inputRef}/>
        <button onClick={onClickHandler}>save</button>
        - actual value {value}
    </>
}
//неконтролируемый инпут
export let UnControlledInputGg = () => <input value={'tra-ta-ta'}/>


//чекбокс
export const ControlledCheckboxg = () => {
    const [value, setValue] = useState(true);
    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setValue(e.currentTarget.checked);
    }
    return <input type="checkbox" checked={value} onChange={onChangeHandler}/>
}
//селект
export const ControlledSelect = () => {
     const[parentvalue,setParentValue]=useState<string|undefined> ('2')
     const onChange=(e:ChangeEvent<HTMLSelectElement>)=>{
         setParentValue(e.currentTarget.value);
     }
    return <>
        <select value={parentvalue} onChange={onChange}>
            <option>none</option>
            <option value={'1'}>Minsk</option>
            <option value={'2'}>Vitebsk</option>
          <option value={'3'}>Kiev</option>
        </select>
    </>
}

