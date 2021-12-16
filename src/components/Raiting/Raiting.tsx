import React from "react";

type RaitingPropsType = {
    value: number;
}

export function Raiting(props: RaitingPropsType) {
    return (                              //мы всегда возращаем пять звездочек, поэтому не будем дублировать код
        <div>
            <Star selected={props.value > 0}/> {/*внутри пишем условие скольким звездочкам гореть*/}
            <Star selected={props.value > 1}/>  {/*идет сравнение валуе и цифры . и если true-то будут гореть*/}
            <Star selected={props.value > 2}/>
            <Star selected={props.value > 3}/>
            <Star selected={props.value > 4}/>
        </div>
    )

    //   if(props.value===1){
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
}

function Star(props: StarPropsType) {
    if (props.selected === true) {
        return <span><b>star</b> </span>;
    } else {
        return <span>star </span>;
    }


}