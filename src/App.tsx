import React from 'react';
import Technologies from "./Technologies";
import Header from "./Header";
import './App.css';
import {Raiting} from "./components/Raiting/Raiting";
import {Accordeon} from "./components/Accordeon/Accordeon";

function App() {
    return < div className="App">
        <Raiting value={3}/>
        <Header/>
        <Accordeon title={'menu1'} collapsed={true} />
        <Accordeon title={"а я в серединке"} collapsed={true} />
        <Technologies/>
        <Raiting value={4}/>
        <Accordeon title={"menu2 footer"}  collapsed={true} />
    </div>
}

export default App;
