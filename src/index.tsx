import * as React from "react";
import * as ReactDOM from "react-dom";
import {observable} from "mobx";
import {observer} from "mobx-react";
import { Router, Route } from "react-router";
import { Provider } from "mobx-react";
import { RouterStore, syncHistoryWithStore } from "mobx-react-router";
import createBrowserHistory from 'history/createBrowserHistory';

import { rootStore } from "./stores";


import App from "./containers/App";
import { ITripData } from "./stores/LuggageStore";

interface Props{
    tripData: ITripData;
}

const browserHistory = createBrowserHistory();
const history = syncHistoryWithStore(browserHistory, rootStore.routerStore);

ReactDOM.render(
    <Provider {...rootStore} >
        <Router history={history} >
            <App />
        </Router>
    </Provider >,
    document.getElementById('root')
);