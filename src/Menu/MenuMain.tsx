import * as React from "react";
import {Routes, Route, Outlet, Link} from "react-router-dom";
import "./constants";
import {menuItems} from "./constants";
import {MenuItem} from "./MenuItem";
import {Calc} from "../Calc/Cacl";
import {Logs} from "../Logs/Logs";

export const MenuMain = () => {
    return (
        <Routes>
            <Route path="/" element={<Layout/>}>
                <Route index element={<Calc/>} path='Calc'/>
                <Route index element={<Logs/>} path='Logs'/>
                <Route index element={<CalcArea/>} path='calc_area'/>

                <Route path="*" element={<NoMatch/>}/>
            </Route>
        </Routes>
    );
};

function Layout() {
    return (
        <div>
            <nav>
                <ul>
                    {
                        menuItems.map((menuItem) =>
                            <MenuItem key={menuItem.id} href={menuItem.href} label={menuItem.label}/>
                        )
                    }
                </ul>
            </nav>

            <hr/>

            <Outlet/>
        </div>
    );
}

function CalcArea() {
    return (
        <div>
            <h2>CalcArea</h2>
        </div>
    );
}

function NoMatch() {
    return (
        <div>
            <h2>Nothing to see here!</h2>
            <p>
                <Link to="/">Go to the home page</Link>
            </p>
        </div>
    );
}