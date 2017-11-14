import * as React from "react";
import { inject, observer } from 'mobx-react';
import { TimerStore } from "../../stores/TimerStore";
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
    timerStore?: TimerStore;
    routing?: RouterStore;
}
@inject("timerStore", "routing")
@observer
export default class TimerView extends React.Component<IProps, {}> {
    render() {
        return (
            <div className={s.timerView}>
                <div>
                    Timer: {this.props.timerStore.timer}
                </div>

                <div className={s.buttons}>
                    <Button onClick={this.onReset}>
                        Resetar timer
                    </Button>

                    <Button onClick={this.goToNumberPage}>
                        Esse é meu número!
                    </Button>
                </div>
                
            </div>
        );
    }

    // or (private?) goToNumberPage() { ... }
    goToNumberPage = () => {
        const timeAtTheMoment = this.props.timerStore.timer;
        this.props.routing.push(`/numero/${timeAtTheMoment}`);
    }
    
    onReset = () => {
        this.props.timerStore.resetTimer();
    }
};