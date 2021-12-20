import React, {useState} from "react";

type AccordeonPropsType = {
    title: string
    //collapsed: boolean

}


export function UncontrolledAccordeon(props: AccordeonPropsType) {

    let[collapsed,setCollapsed]=useState(false);
    return <>
        <AccordeonTitle title={props.title}/> <button onClick={()=>{setCollapsed(true)}}>Свернуть</button>
        <button onClick={()=>{setCollapsed(false)}}>Развернуть</button>

        {!collapsed && <AccordeonBody/>}
    </>
}

type AccordeonTitlePropsType = {
    title: string
}

function AccordeonTitle(props: AccordeonTitlePropsType) {
    return <h1>{props.title}</h1>
}



export function AccordeonBody() {
    return <ul>
        <li>number 1</li>
        <li>number 2</li>
        <li>number 3</li>
    </ul>
}

