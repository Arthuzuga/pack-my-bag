import * as React from "react";
import { inject, observer } from "mobx-react";
import { match } from "react-router";
import { RouterStore } from "mobx-react-router";

/**
 * Components
 */

import Button from "../../components/Button/";

/** 
 * Style
 */

const s = require("./style.scss");

/**
 * Interfaces
 */

interface IProps {
    routing: RouterStore;
    match: match<{
        number: number;    
    }>;
}

@inject("routing")
@observer
export default class PrintNumber extends React.Component<IProps, {}> {
    render() {
        return (
            <div className={s.number}>
                Seu número é: {this.props.match.params.number}
            </div>
        );
    }
};