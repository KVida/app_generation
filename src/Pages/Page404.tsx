import {Link} from "react-router-dom";
import * as React from "react";

export const Page404 = () => {
    return (
        <div>
            <h2>Nothing to see here!</h2>
            <p>
                <Link to="/">Go to the home page</Link>
            </p>
        </div>
    );
};