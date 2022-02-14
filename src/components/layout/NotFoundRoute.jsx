import React from "react";
import {Link} from "react-router-dom";
import {LINK} from "../../utils/constants";

const NotFoundRoute = () => {
    return (
        <div>
            <Link rel="manifest" to={LINK.HOME}>Not Found Route!
                Go to Home
            </Link>
        </div>
    )
}

export default NotFoundRoute;
