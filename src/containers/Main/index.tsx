import * as React from "react";
import { Route } from "react-router";

/**
 * Containers
 */

import Basic, { Fields } from "../../components/Forms";
import Table from "../../components/Table";

/** 
 * Style
 */

// const s = require("./style.scss");

interface Props {}
interface State {
    fields?: Fields;
}

export default class Main extends React.Component<Props, State> {
    state: State = {};
    
    onSubmit = (fields: Fields) => {
        this.setState({ fields });
    }
    
    render() {
        this.state.fields
        return (
            <div>
                <Basic
                    onSubmit={this.onSubmit}
                />

                {
                    this.state.fields ? (
                        <Table fields={this.state.fields}/>
                    ) : null
                }
            </div>
        );
    }
};