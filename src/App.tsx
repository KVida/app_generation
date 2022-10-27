import React from 'react';
import "./scss/_base.scss";
import {BrowserRouter} from "react-router-dom";
import {NavigationRouters} from "./Layout/Navigation/NavigationRouters";
import {Provider} from "react-redux";
import {store} from "./common/store";
import {StyledEngineProvider} from "@mui/material/styles";

function App() {
    return (
        <Provider store={store}>
            <StyledEngineProvider injectFirst>
                <div className="App">
                    <BrowserRouter>
                        <NavigationRouters/>
                    </BrowserRouter>
                </div>
            </StyledEngineProvider>
        </Provider>
    );
}

export default App;
