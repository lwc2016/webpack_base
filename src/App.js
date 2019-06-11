import React, { Component } from "react";
import "./css/main.css";
import logo from "./images/logo.png";
import "./css/index.less";

export default class App extends Component{
    render(){
        return(
            <div>
                <div>Hello world!</div>
                <div className="logo">
                    <img src={logo} />
                </div>
            </div>
        )
    }
}