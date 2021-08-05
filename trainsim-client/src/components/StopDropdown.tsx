import "bulma/css/bulma.css";
import React from "react";
import Stop from "../Stop";

export interface StopDropdownProps {
    name: string;
    stops: Stop[];
    value: string;
    onChange: (value: string) => void;
};

export default (props: StopDropdownProps) => <div className="field">
    <label className="label" htmlFor={props.name}>{props.name}</label>
    <div className="control has-icons-left">
        <span className="select" style={{ width: "100%" }}>
            <select
                name={props.name}
                style={{ width: "100%" }}
                onChange={e => props.onChange(e.target.value)}
            >
                <option></option>
                {props.stops.map(s => <option
                    key={s.otpId}
                    value={s.otpId}
                    selected={s.otpId === props.value}>
                    {s.name}
                </option>)}
            </select>
            <span className="icon is-small is-left">
                <i className="fas fa-train"></i>
            </span>
        </span>
    </div>
</div>;