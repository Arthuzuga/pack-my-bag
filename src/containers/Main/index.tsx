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

const s = require("./style.scss");

interface Props {}
interface State {
    fields?: Fields;
}

export default class Main extends React.Component<Props, State> {
    state: State = {};

    componentDidMount() {
        const fields = localStorage.getItem("fields");
        if (fields) {
            this.setState({ fields: JSON.parse(fields) });
        }
    }
    
    onSubmit = (fields: Fields) => {
        localStorage.setItem("fields", JSON.stringify(fields));
        this.setState({ fields });
    }
    
    render() {
        return (
            <div className={s.main}>
                <div className={s.title}>
                    <h1>Arrume Minha Mala</h1> 
                    <h2>Seu assistente pessoal para lhe ajudar a arrumar a suas roupas</h2>
                </div>   
                    <Basic
                        fields={this.state.fields}
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