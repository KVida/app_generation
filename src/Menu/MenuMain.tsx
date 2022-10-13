import * as React from "react";
import {Routes, Route, Outlet, Link} from "react-router-dom";
import "./constants";
import {Calc} from "../Calc/Cacl";
import {Logs} from "../Logs/Logs";
import {Home} from "../Home/Home";
import {Page404} from "./Page404";
import {Layout} from "./Layout";

export const MenuMain = () => {
    return (
        <Routes>
            <Route path="/" element={<Layout/>}>
                <Route index element={<Home/>} path=''/>
                <Route index element={<Calc/>} path='Calc'/>
                <Route index element={<Logs/>} path='Logs'/>

                <Route path="*" element={<Page404/>}/>
            </Route>
        </Routes>
    );
};