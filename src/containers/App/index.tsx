import * as React from "react";
import { Route } from "react-router";

import Main from "../Main";

const s = require("./style.scss");

export default class App extends React.Component<{}, {}> {
	render() {
		return (
			<div className={s.container}>
				<Route exact path="/" component={Main} />
			</div>
		);
	}
}
