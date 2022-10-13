import React from 'react';
import "./scss/_base.scss";
import {BrowserRouter} from "react-router-dom";
import {NavigationRouters} from "./Layout/Navigation/NavigationRouters";

function App() {
    return (
        <div className="App">
            <BrowserRouter>
                <NavigationRouters/>
            </BrowserRouter>
        </div>
    );
}

export default App;
