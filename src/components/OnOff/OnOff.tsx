import React, {useState} from "react";


type PropsType = {
   on:boolean
    setOn:
}

 export const OnOff = (props: PropsType) => {
    const onStyle = {
        width: ' 30px',
        height: '20px',
        border: '1px solid black',
        display:'inline-block',
        padding:'5px',
        backgroundColor: props.on ? 'green' :'#fff',  //если включена true,значит цвет зеленый,иначе красный
    };    //будем задавать стили и превращаем их в обьект
    const offStyle = {
        width: ' 30px',
        height: '20px',
        border: '1px solid black',
        display:'inline-block',
        marginLeft:'5px',
        padding:'5px',
        backgroundColor: props.on ? '#fff': 'red',  //задаем цвет выключенной кнопке
    };
    const indicatorStyle = {
        width: '10px',
        height: '10px',
        borderRadius: '15px',
        border: '1px solid black',
        display:'inline-block',
        marginLeft:'10px',
        backgroundColor:props.on ?'green': 'red',  //лампочка может быть либо зеленой либо красной
    };

    return (
        <div>
            <div style={onStyle} onClick={()=>{setOn(true)}}>On</div>
            <div style={offStyle} onClick={()=>{setOn(false)}}>Off</div>
            <div style={indicatorStyle}></div>
        </div>
    )
}