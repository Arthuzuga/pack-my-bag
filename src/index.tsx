import * as React from "react";
import * as ReactDOM from "react-dom";
import {observable} from "mobx";
import {observer} from "mobx-react";
import { Router, Route } from "react-router";
import { Provider } from "mobx-react";
import { RouterStore, syncHistoryWithStore } from "mobx-react-router";
import createBrowserHistory from 'history/createBrowserHistory';

import { TimerStore } from "./stores";

import App from "./containers/App";

const routingStore = new RouterStore();
const timerStore = new TimerStore();
const rootStores = {
    timerStore: timerStore,
    routing: routingStore
};

const browserHistory = createBrowserHistory();
const history = syncHistoryWithStore(browserHistory, routingStore);

ReactDOM.render(
    <Provider {...rootStores} >
        <Router history={history} >
            <App />
        </Router>
    </Provider >,
    document.getElementById('root')
);