import React from "react";

function Header(props) {
    return (
        <div>
            <header>
                <h1 key={props.name}>{props.name}</h1>
            </header>
        </div>
    )
}

export default Header