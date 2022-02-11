import React from "react";

type ItemType={
    title:string
    value:any
}

type AccordeonPropsType = {
    title: string
    collapsed: boolean
    onClick:()=>void
    items:Array<ItemType>
    ggg:(value:any)=>void


}


export function Accordeon(props: AccordeonPropsType) {
    return <>
        <AccordeonTitle title={props.title} onClick={props.onClick}/>
        {!props.collapsed && <AccordeonBody items={props.items} ggg={props.ggg}/>}
    </>
}

type AccordeonTitlePropsType = {
    title: string
    onClick:()=>void
}

function AccordeonTitle(props: AccordeonTitlePropsType) {
    return <h1 onClick={props.onClick}>{props.title}</h1>
}

type AccordeonBodyPropsType = {
    items:Array<ItemType>
    ggg:(value:any)=>void
}

export function AccordeonBody(props:AccordeonBodyPropsType) {
    return <ul>
        {props.items.map((m,index)=> <li onClick={()=>{props.ggg(m.value)}} key={index}>{ m.title}</li>)
    }



    </ul>
}

