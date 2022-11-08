import * as React from "react";
import {Routes, Route} from "react-router-dom";
import "../../common/constants";
import {Layout} from "../Layout";
import {Home} from "../../Pages/Home/Home";
import {Calc} from "../../Pages/Calc/Calculation";
import {Logs} from "../../Pages/Logs/Logs";
import {Page404} from "../../Pages/Page404";
import {PATH_PAGE_CALC, PATH_PAGE_LOGS} from "../../common/constants";

interface NavigationRoutersProps {

}

export const NavigationRouters = (props: NavigationRoutersProps) => {
    return (
        <Routes>
            <Route path="/" element={<Layout/>}>
                <Route index element={<Home/>} path=''/>
                <Route index element={<Calc/>} path={PATH_PAGE_CALC}/>
                <Route index element={<Logs/>} path={PATH_PAGE_LOGS}/>

                <Route path="*" element={<Page404/>}/>
            </Route>
        </Routes>
    );
};