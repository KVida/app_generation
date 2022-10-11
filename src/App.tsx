import React from 'react';
import './App.css';
import {MenuMain} from "./Menu/MenuMain";
import {BrowserRouter} from "react-router-dom";

function App() {
  return (
    <div className="App">
        <BrowserRouter>
            <MenuMain/>
        </BrowserRouter>
    </div>
  );
}

export default App;
