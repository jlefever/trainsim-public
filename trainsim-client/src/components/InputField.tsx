import React from "react";

export interface InputFieldProps {
    label: string;
    htmlName: string;
    htmlType?: string;
    icon: string;
    required: boolean;
    autoComplete?: string;
    value: string;
    setValue: (value: string) => void;
}

export default (props: InputFieldProps) => <div className="field">
    <label className="label" htmlFor={props.htmlName}>{props.label}</label>
    <div className="control has-icons-left">
        <input className="input"
            name={props.htmlName}
            type={props.htmlType && "text"}
            autoComplete={props.autoComplete}
            required={props.required}
            value={props.value}
            onChange={e => props.setValue(e.target.value)} />
        <span className="icon is-left"><i className={props.icon}></i></span>
    </div>
</div>;