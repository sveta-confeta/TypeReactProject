import React from 'react';

type ItemType = {
    title: string
    value: any
}


type SelectPropsType = {
    value: any//селект принимает текущее выбранное значение
    onChange: (value: any) => void//мы хотим знать когда селект изменится
    items: Array<ItemType>//как в акардеоне-дайте нам items

}

export function Select (props: SelectPropsType){
    // const[parentvalue,setParentValue]=useState<string|undefined> ('2')
    // const onChange=(e:ChangeEvent<HTMLSelectElement>)=>{
    //     setParentValue(e.currentTarget.value);
    // }
    return (
        <div>
            <div>{}</div>
            {props.items.map(i=><div>{i.title}</div>)}
        </div>
        // <select value={parentvalue} onChange={onChange}>
        //     <option>none</option>
        //     <option value={'1'}>Minsk</option>
        //     <option value={'2'}>Vitebsk</option>
        // </select>
    );
};

export default Select;