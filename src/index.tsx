import * as React from "react";
import * as ReactDOM from "react-dom";
import { Router } from "react-router";
import { Provider } from "mobx-react";
import { syncHistoryWithStore } from "mobx-react-router";
import createBrowserHistory from "history/createBrowserHistory";

import { rootStore } from "./stores";

import App from "./containers/App";
import { MuiThemeProvider } from "material-ui/styles";

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
