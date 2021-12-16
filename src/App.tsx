import React from 'react';
import Technologies from "./Technologies";
import Header from "./Header";
import './App.css';
import {Raiting} from "./components/Raiting/Raiting";
import {Accordeon} from "./components/Accordeon/Accordeon";

function App() {
    return < div className="App">

        <Header/>
        <Accordeon title={'menu1'} collapsed={true} />
        <Accordeon title={"а я в серединке"} collapsed={true} />
        <Technologies/>
        <Raiting value={1}/>
        <Raiting value={2}/>
        <Raiting value={3}/>
        <Raiting value={4}/>
        <Raiting value={5}/>
        <Accordeon title={"menu2 footer"}  collapsed={true} />
    </div>
}

export default App;
