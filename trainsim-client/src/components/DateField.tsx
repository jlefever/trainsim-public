import "bulma/css/bulma.css";
import React, { useDebugValue } from "react";

export interface DateFieldProps {
    name: string;
    min?: Date | null;
    max?: Date | null;
    value?: Date | null;
    disabled?: boolean;
    onChange: (value: Date) => void;
};

export default (props: DateFieldProps) => <div className="field">
    <label className="label" htmlFor={props.name}>{props.name}</label>
    <div className="control has-icons-left">
        <input className="input"
            type={props.disabled ? "text" : "date"}
            name={props.name}
            min={props.min?.toISOString().substring(0, 10)}
            max={props.max?.toISOString().substring(0, 10)}
            value={props.disabled ? "" : props.value?.toISOString().substring(0,10)}
            onChange={e => e.target.valueAsDate && props.onChange(e.target.valueAsDate)}
            disabled={props.disabled}
        />
        <span className="icon is-left">
            <i className="fas fa-calendar"></i>
        </span>
    </div>
</div>