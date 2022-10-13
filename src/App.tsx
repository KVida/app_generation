import React from 'react';
import "./scss/_base.scss";
import {MenuMain} from "./Menu/MenuMain";
import {BrowserRouter} from "react-router-dom";
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';



function App() {
  return (
    <div className="App" >

        <BrowserRouter>
            <MenuMain/>
        </BrowserRouter>


    </div>
  );
}

export default App;
