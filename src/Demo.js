import React, { Component } from "react";
import { hello } from "./utils.js";

export default class Demo extends Component{
    render(){
        return (
            <div>我是demo, {hello()}</div>
        )
    }
};