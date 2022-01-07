import React, {useState} from 'react';
import Technologies from "./Technologies";
import Header from "./Header";
import './App.css';
import {Raiting, RaitingValueType} from "./components/Raiting/Raiting";
import {Accordeon} from "./components/Accordeon/Accordeon";
import {OnOff} from "./components/OnOff/OnOff";
import {UncontrolledAccordeon} from "./components/Accordeon Uncontroller/AccordeonUncontroller";
import {UncontrolledRaiting} from "./Uncontroller_Raiting/Raiting";

function App(props: any) {

    //будем для рейтинга создавать useState:
    let [raitingValue, setRaitingValue] = useState<RaitingValueType>(0);

    //будем для aккордеона  создавать useState:
    let [accordeonCollaped, setAccordeonCollaped] = useState<boolean>(false);

    //будем для onOff  создавать useState:
    let[on,setOn]=useState(false);
    //on: boolean //так как придут false || true


    return < div className="App">
        <OnOff on={true} setOn={C}/>
        {/*<OnOff on={false}/>*/}
        {/*<OnOff on={true}/>*/}
        ///
        <UncontrolledAccordeon title={'Меню UncontrolledAccordeon'}/>
        <UncontrolledAccordeon title={'Пользователи UncontrolledAccordeon'}/>
        <UncontrolledRaiting/>

        <Header/>
        <Accordeon title={'menu1'} collapsed={accordeonCollaped} onClick={() => {
            setAccordeonCollaped(!accordeonCollaped)
        }}/>
        {/*<Accordeon title={"а я в серединке"} collapsed={true} />*/}
        <Technologies/>
        <Raiting value={raitingValue} onClick={setRaitingValue}/>
        {/*<Raiting value={2}/>*/}
        {/*<Raiting value={3}/>*/}
        {/*<Raiting value={4}/>*/}
        {/*<Raiting value={5}/>*/}
        {/*<Accordeon title={"menu2 footer"}  collapsed={true} />*/}
    </div>
}

export default App;
