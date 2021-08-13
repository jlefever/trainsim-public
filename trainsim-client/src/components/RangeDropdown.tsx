import React from "react";

export interface RangeDropdown {
    name: string;
    min: number;
    max: number;
    value: number;
    icon: string
    onChange: (value: number) => void;
};

// https://stackoverflow.com/a/19506234
function range(start: number, end: number) {
    return Array.apply(0, Array(end)).map((_, index) => index + start);
};

export default (props: RangeDropdown) => <div className="field">
    <label className="label" htmlFor={props.name}>{props.name}</label>
    <div className="control has-icons-left">
        <span className="select" style={{ width: "100%" }}>
            <select name={props.name}
                style={{ width: "100%" }}
                onChange={e => props.onChange(Number.parseInt(e.target.value))}
                value={props.value}>
                {range(props.min, props.max).map(i => <option key={i} value={i}>{i}</option>)}
            </select>
            <span className="icon is-left">
                <i className={props.icon}></i>
            </span>
        </span>
    </div>
</div>;