import React from "react";
import {MenuComponent} from "./Navigation/Components/MenuComponent";
import {ContentComponent} from "./Navigation/Components/ContentComponent";

export const Layout = () => {

    return (
        <div>
            <MenuComponent/>
            <ContentComponent/>
        </div>
    );
};