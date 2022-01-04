import React, {useState} from 'react';
import Technologies from "./Technologies";
import Header from "./Header";
import './App.css';
import {Raiting, RaitingValueType} from "./components/Raiting/Raiting";
import {Accordeon} from "./components/Accordeon/Accordeon";
import {OnOff} from "./components/OnOff/OnOff";
import {UncontrolledAccordeon} from "./components/Accordeon Uncontroller/Accordeon";
import {UncontrolledRaiting} from "./Uncontroller_Raiting/Raiting";

function App(props:any){

 //будем для рейтинга создавать useState:
let[raitinValue,setRaitingValue]=useState<RaitingValueType>(0);


    return < div className="App">
        <OnOff />
        {/*<OnOff on={false}/>*/}
        {/*<OnOff on={true}/>*/}
          ///
        <UncontrolledAccordeon title={'Меню UncontrolledAccordeon'}/>
        <UncontrolledAccordeon title={'Пользователи UncontrolledAccordeon'}/>
        <UncontrolledRaiting />

        <Header/>
        <Accordeon title={'menu1'} collapsed={true} />
        <Accordeon title={"а я в серединке"} collapsed={true} />
        <Technologies/>
        <Raiting value={raitinValue}/>
        {/*<Raiting value={2}/>*/}
        {/*<Raiting value={3}/>*/}
        {/*<Raiting value={4}/>*/}
        {/*<Raiting value={5}/>*/}
        <Accordeon title={"menu2 footer"}  collapsed={true} />
    </div>
}

export default App;
