import React, {useEffect, useState} from 'react';

// type PropsType{
//    неконролируемая компонента
// }

export const Clock = () => {
    //нужен локальный стейт чтоб компонента перерисовывалась
    let [data, setData] = useState(new Date());


    useEffect(()=>{ //внутри юзэффекта будет тикать setInterval раз в секунду
        let ID=setInterval(()=>{
            setData(new Date()) //тикают , но без ноликов
        },1000);
        return ()=>{
            clearInterval(ID)  //когда компонета будет умирать , интервал останавливыается(функция зачистки)
        }
    },[]); //для запуска часов нужно чтоб юзэффект отработал 1 раз : []

    //для рефакторинга часов-добавим нолики:
    const  zero = (num:number) => num < 10 ? num + '0' : num;
    const seconds=zero(data.getSeconds());
    const minutes=zero(data.getMinutes());
    const hours=zero(data.getHours());

    return (


        <div>

            <span>{data.getHours()}</span>
            :
            <span>{data.getMinutes()}</span>
            :
            <span>{data.getSeconds()}</span>

        </div>
    );
};

