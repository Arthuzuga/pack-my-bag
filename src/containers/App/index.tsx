import * as React from "react";
import { Route } from "react-router";

/**
 * Containers
 */

import Main from "../Main";

/** 
 * Style
 */

const s = require("./style.scss");

export default class App extends React.Component<{}, {}> {
    render() {
        return (
            <div className={s.container}>
                {/* <Route exact path="/" component={TimerView} />
                <Route path="/numero/:number" component={PrintNumber} /> */}
                <Route exact path="/" component={Main}/>
            </div>
        );
    }
};