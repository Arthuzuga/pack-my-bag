import * as React from "react";
import * as ReactDOM from "react-dom";
import {observable} from "mobx";
import {observer} from "mobx-react";
import { Router, Route } from "react-router";
import { Provider } from "mobx-react";
import { RouterStore, syncHistoryWithStore } from "mobx-react-router";
import createBrowserHistory from 'history/createBrowserHistory';

import { LuggageStore } from "./stores";

import App from "./containers/App";

const routingStore = new RouterStore();
const luggageStore = new LuggageStore();
const rootStores = {
    luggageStore: luggageStore, // este nome tem que ser igual ao nome passado para o inject
    routing: routingStore
};

const browserHistory = createBrowserHistory();
const history = syncHistoryWithStore(browserHistory, routingStore);

// const base = "BRL";

// async function getCurrency() {
//     try {
//         const data = await fetch(`http://api.fixer.io/latest?base=${base}`).then(res => res.json());
//         console.log(data);
//     } catch (err) {
//     }
// }

// getCurrency()

ReactDOM.render(
    <Provider {...rootStores} >
        <Router history={history} >
            <App />
        </Router>
    </Provider >,
    document.getElementById('root')
);