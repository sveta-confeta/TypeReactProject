import React, {useReducer, useState} from "react";

type AccordeonPropsType = {
    title: string
}
export type ActionType={
    type:string

}

export type StateType={
    collapsed:boolean;
}

//переписываем useState на useReducer.
//стейтом является collapsed:false
//инструкция что нужно делать с обязательным свойством type

export const reducer=(state:StateType,action:ActionType):StateType=>{//перепишем useState на редьюссер. в нем только true/false
    if(action.type==='TOGGLE-COLLAPSED'){
         return {...state,collapsed: !state.collapsed};

    }
    return state;
}


export function UncontrolledAccordeon(props: AccordeonPropsType) {

    //let[collapsed,setCollapsed]=useState(false); //так как по умолчанию колабсед фолсе,то !colapsed это true
    let [collapsed,collapsedDispatch]=useReducer(reducer,{collapsed:false});
    return <>
        {/*<AccordeonTitle*/}
        {/*    title={props.title}*/}
        {/*   onClick={()=>{setCollapsed(!collapsed)} }/>*/}
        <AccordeonTitle
            title={props.title}
            onClick={()=>{collapsedDispatch({type:'TOGGLE-COLLAPSED'})} }/>
        {!collapsed && <AccordeonBody/>}
    </>
}
// <button onClick={()=>{setCollapsed(!collapsed)}}>Toggle</button>

type AccordeonTitlePropsType = {
    title: string
   onClick:()=>void
}

function AccordeonTitle(props: AccordeonTitlePropsType) {
    return <h1 onClick={()=>{props.onClick()}}>{props.title}</h1>
}



export function AccordeonBody() {
    return <ul>
        <li>number 1</li>
        <li>number 2</li>
        <li>number 3</li>
    </ul>
}

