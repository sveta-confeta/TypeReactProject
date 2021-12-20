import React from "react";

type AccordeonPropsType = {
    title: string
    collapsed: boolean

}


export function Accordeon(props: AccordeonPropsType) {
    return <>
        <AccordeonTitle title={props.title}/>
        {!props.collapsed && <AccordeonBody/>}
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

