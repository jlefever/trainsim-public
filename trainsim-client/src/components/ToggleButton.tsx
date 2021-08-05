import "bulma/css/bulma.css";
import React from "react";

export interface ToggleButton {
    text: string;
    isOn: boolean;
    onToggle: () => void;
};

export default (props: ToggleButton) => {
    const classes = "button is-fullwidth is-primary has-text-weight-bold";

    if (!props.isOn) {
        return <button className={`${classes} is-outlined`} onClick={_ => props.onToggle()}>
            {props.text}
        </button>
    }

    return <button className={classes} onClick={_ => props.onToggle()}>
        <span className="icon is-small"><i className="fas fa-check"></i></span>
        <span>{props.text}</span>
    </button>;
};
