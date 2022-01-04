import React, {useState} from "react";

type AccordeonPropsType = {
    title: string


}


export function UncontrolledAccordeon(props: AccordeonPropsType) {

    let[collapsed,setCollapsed]=useState(false); //так как по умолчанию колабсед фолсе,то !colapsed это true
    return <>
        <AccordeonTitle
            title={props.title}
           onClick={()=>{setCollapsed(!collapsed)} }

        />



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

