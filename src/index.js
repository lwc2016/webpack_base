import React from "react";
import ReactDOM from "react-dom";

import App from "./App.js";

const render = (Component)=>{
    ReactDOM.render(<Component />, document.getElementById("root"));
};
render(App);

if(module.hot){
    console.log("开启热更新");
    module.hot.accept("./App.js", function(){
        console.log("--文件更新--");
        let NextApp = require("./App.js").default;
        render(NextApp);
    })
}