import React from "react";
import Stop from "../models/Stop";

export interface StopDropdownProps {
    name: string;
    stops: readonly Stop[];
    value?: Stop;
    onChange: (stop?: Stop) => void;
};

export default (props: StopDropdownProps) => <div className="field">
    <label className="label" htmlFor={props.name}>{props.name}</label>
    <div className="control has-icons-left">
        <span className="select" style={{ width: "100%" }}>
            <select name={props.name}
                style={{ width: "100%" }}
                onChange={e => props.onChange(props.stops.find(s => s.id == parseInt(e.target.value)))}
                value={props.value?.id}>
                <option value=""></option>
                {props.stops.map(s => <option key={s.id} value={s.id}>{s.name}</option>)}
            </select>
            <span className="icon is-small is-left">
                <i className="fas fa-train"></i>
            </span>
        </span>
    </div>
</div>;