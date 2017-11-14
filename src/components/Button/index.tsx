import * as React from "react";

/**
 * Style
 */

const s = require("./style.scss");

interface IButtonProps {
    onClick: () => void;
};

interface IButtonState {};

class Button extends React.Component<IButtonProps, IButtonState> {
    public render(): JSX.Element {
        return (
            <button className={s.button} onClick={this.props.onClick}>
                {this.props.children}
            </button>
        );
    }
}

export default Button;
