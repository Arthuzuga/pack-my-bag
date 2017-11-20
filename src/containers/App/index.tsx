import * as React from "react";
import { Route } from "react-router";

/**
 * Containers
 */

import Basic from "../../components/Forms";
import TimerView from "../TimerView";
import PrintNumber from "../PrintNumber"

/** 
 * Style
 */

const s = require("./style.scss");

export default class App extends React.Component<{}, {}> {
    render() {
        return (
            <div className="container">
                {/* <Route exact path="/" component={TimerView} />
                <Route path="/numero/:number" component={PrintNumber} /> */}
                <Route exact path="/" component={Basic}/>
            </div>
        );
    }
};