import React from "react";

function Menu(props){
    return(
        <nav className="navbar navbar-light px-5 py-3">
            <div className="container-fluid">
                <h2>APP-NAME</h2>
                <div>
                    <a class="navbar-brand px-2" href=".">Home</a>
                    <a class="navbar-brand px-2" href=".">Log in</a>
                    <a class="navbar-brand px-2" href=".">Sign Up</a>
                </div>
            </div>
        </nav>
    );
}

export default Menu;