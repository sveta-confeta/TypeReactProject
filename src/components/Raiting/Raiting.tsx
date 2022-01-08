import React from "react";

export type RaitingValueType=0|1|2|3|4|5;

type RaitingPropsType = {
    value: RaitingValueType;
    onClick:(value:RaitingValueType)=>void;
}

export function Raiting(props: RaitingPropsType) {
    return (
        //мы всегда возращаем пять звездочек, поэтому не будем дублировать код

        // {props.value > 0}-это операция сравнения в которой возращается true or false
        <div>
        <Star selected={props.value > 0} onClick={props.onClick} value={1}/> {/*внутри пишем условие скольким звездочкам гореть*/}
            <Star selected={props.value > 1}  onClick={props.onClick} value={2}/> {/*идет сравнение валуе и цифры . и если true-то будут гореть*/}
            <Star selected={props.value > 2}  onClick={props.onClick} value={3}/>
            <Star selected={props.value > 3}  onClick={props.onClick} value={4}/>
            <Star selected={props.value > 4}  onClick={props.onClick} value={5}/>
        </div>
    )

    //   if(props.value===1){   //сверху идет оптимизация кода который так дублируется:
    //       return (
    //           <div>
    //               <Star selected={true} />
    //               <Star selected={false} />
    //               <Star selected={false}/>
    //               <Star selected={false}/>
    //               <Star selected={false}/>
    //           </div>
    //       )
    //   }
    //   if(props.value===2){
    //       return (
    //           <div>
    //               <Star selected={true} />
    //               <Star selected={true} />
    //               <Star selected={false}/>
    //               <Star selected={false}/>
    //               <Star selected={false}/>
    //           </div>
    //       )
    //   }
    //   if(props.value===3){
    //       return (
    //           <div>
    //               <Star selected={true} />
    //               <Star selected={true} />
    //               <Star selected={true}/>
    //               <Star selected={false}/>
    //               <Star selected={false}/>
    //           </div>
    //       )
    //   }
    //   if(props.value===4){
    //       return (
    //           <div>
    //               <Star selected={true} />
    //               <Star selected={true} />
    //               <Star selected={true}/>
    //               <Star selected={true}/>
    //               <Star selected={false}/>
    //           </div>
    //       )
    //   }
    //   if(props.value===5){
    //       return (
    //           <div>
    //               <Star selected={true} />
    //               <Star selected={true} />
    //               <Star selected={true}/>
    //               <Star selected={true}/>
    //               <Star selected={true}/>
    //           </div>
    //       )
    //   }
    // return(
    //           <div>
    //               <Star selected={false} />
    //               <Star selected={false} />
    //               <Star selected={false}/>
    //               <Star selected={false}/>
    //               <Star selected={false}/>
    //           </div>
    //       )
}

type StarPropsType = {
    selected: boolean;
    onClick:(value:RaitingValueType)=>void;
    value:RaitingValueType
}

function Star(props: StarPropsType) {
    return( <span onClick={()=>
        props.onClick}>
        {props.selected ? <b>star</b> : 'star' }</span>
    )



}