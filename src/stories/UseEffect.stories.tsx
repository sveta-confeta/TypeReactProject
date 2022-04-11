import {useEffect, useState} from "react";

export default {
    title: "useEffect"
}

export const SetTimeoutExample = () => {
    const [date, setDate] = useState<Date>(new Date())
    const [counter, setCounter] = useState(1);
    const [fake, setFake] = useState(1)

   useEffect(() => {
       setInterval(() => {
           setDate(new Date());
       }, 1000)
   },[])   //taimer который работает корректно


function addZero(num: number) {
    if (num >= 0 && num <= 9) {
        return '0' + num;
    } else {
        return num;
    }
}
const stringTime = addZero(date.getHours()) + ':' + addZero(date.getMinutes()) + ':' + addZero(date.getSeconds())

    //     setInterval(() => {
    //         setCounter((state)=>state+1);
    //         // setFake((state)=>state+1);
    //     }, 1000)
//cчетчик который работает корректно

    return <>
        {/*counter: {counter} , fake:{fake}*/}
        {stringTime}

    </>
}