import * as React from "react";
import {Routes, Route} from "react-router-dom";
import "../../common/constants";
import {Layout} from "../Layout";
import {Home} from "../../Pages/Home/Home";
import {Calc} from "../../Pages/Calc/Cacl";
import {Logs} from "../../Pages/Logs/Logs";
import {Page404} from "../../Pages/Page404";

export const NavigationRouters = () => {
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