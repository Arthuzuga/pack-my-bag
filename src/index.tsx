import * as React from "react";
import * as ReactDOM from "react-dom";
import { observable } from "mobx";
import { observer } from "mobx-react";
import { Router, Route } from "react-router";
import { Provider } from "mobx-react";
import { RouterStore, syncHistoryWithStore } from "mobx-react-router";
import createBrowserHistory from "history/createBrowserHistory";

import { rootStore } from "./stores";

import App from "./containers/App";
import { ITripData } from "./stores/LuggageStore";
import { MuiThemeProvider } from "material-ui/styles";

interface Props {
	tripData: ITripData;
}

const browserHistory = createBrowserHistory();
const history = syncHistoryWithStore(browserHistory, rootStore.routerStore);

ReactDOM.render(
	<MuiThemeProvider>
		<Provider {...rootStore}>
			<Router history={history}>
				<App />
			</Router>
		</Provider>
	</MuiThemeProvider>,
	document.getElementById("root"),
);
