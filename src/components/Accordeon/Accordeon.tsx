import React from "react";

type AccordeonPropsType = {
    title: string
    collapsed: boolean
    onClick:()=>void

}


export function Accordeon(props: AccordeonPropsType) {
    return <>
        <AccordeonTitle title={props.title} onClick={props.onClick}/>
        {!props.collapsed && <AccordeonBody/>}
    </>
}

type AccordeonTitlePropsType = {
    title: string
    onClick:()=>void
}

function AccordeonTitle(props: AccordeonTitlePropsType) {
    return <h1 onClick={props.onClick}>{props.title}</h1>
}



export function AccordeonBody() {
    return <ul>
        <li>number 1</li>
        <li>number 2</li>
        <li>number 3</li>
    </ul>
}

