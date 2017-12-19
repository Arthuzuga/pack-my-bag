import * as React from "react";
import * as ReactDOM from "react-dom";
import {observable} from "mobx";
import {observer} from "mobx-react";
import { Router, Route } from "react-router";
import { Provider } from "mobx-react";
import { RouterStore, syncHistoryWithStore } from "mobx-react-router";
import createBrowserHistory from 'history/createBrowserHistory';

import { LuggageStore, CurrentStore, WeatherStore } from "./stores";


import App from "./containers/App";
import { ITripData } from "./stores/LuggageStore";

interface Props{
    tripData: ITripData;
}

const routingStore = new RouterStore();
const luggageStore = new LuggageStore();
const weatherStore = new WeatherStore();
const currentStore = new CurrentStore();
const rootStores = {
    luggageStore: luggageStore, // este nome tem que ser igual ao nome passado para o inject
    weatherStore: weatherStore,
    currentStore: currentStore,
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