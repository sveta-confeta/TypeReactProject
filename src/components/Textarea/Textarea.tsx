import React, {ChangeEvent, useState} from 'react';


export type DataType={
    id:string
    textValue:string
}
export type TextAreaType={
    addTextarea:(value:string)=>void
    textareaData:Array<DataType>
}

export  const Textarea = (props:TextAreaType) => {
    let [value,setValue]=useState(" ");

    const onChangeValue=(event:ChangeEvent<HTMLInputElement>)=>{
       setValue(event.currentTarget.value);

    }
    const addTextarea=()=>{
        props.addTextarea(value);
        setValue( ' ');
    }



    return (

        <div>
            <input onChange={onChangeValue}  value={value} type="textarea"/>
            <button onClick={addTextarea}>написать</button>
          <ul>{props.textareaData.map(m=>{
              return(
                  <li key={m.id}> {m.textValue}</li>
              )
          })}


          </ul>
        </div>
    );
};

