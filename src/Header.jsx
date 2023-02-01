import React from "react";

function Header(props) {
    return (
        <header>
            <h1>{props.headerText}</h1>
            <p>Number of Clicks: {props.clicks}</p>
        </header>
    )
}

export default Header;