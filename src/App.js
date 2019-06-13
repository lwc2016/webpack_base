import React, { Component } from "react";
import "./css/main.css";
import logo from "./images/logo.png";
import "./css/index.less";
import { hello } from "./utils.js";
import Demo from "./Demo.js";

export default class App extends Component{
    render(){
        return(
            <div>
                <div>Hello world!, {hello()}</div>
                <div className="logo">
                    <img src={logo} />
                </div>
                <Demo></Demo>
            </div>
        )
    }
}