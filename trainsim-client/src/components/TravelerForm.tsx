import React from "react";
import InputField from "./InputField";

export interface TravelerFormProps {
    // TODO
}

export default (_: TravelerFormProps) => (
    <div>
        <div className="columns">
            <div className="column">
                <InputField
                    label="First Name"
                    htmlName="first-name"
                    htmlType="text"
                    icon="fas fa-user"
                    required={true}
                    value="Fake"
                    setValue={v => console.log(v)}
                />
            </div>
            <div className="column">
                <InputField
                    label="Last Name"
                    htmlName="last-name"
                    htmlType="text"
                    icon="fas fa-user"
                    required={true}
                    value="Name"
                    setValue={v => console.log(v)}
                />
            </div>
        </div>
        <div className="columns">
            <div className="column">
                <InputField
                    label="Email"
                    htmlName="email"
                    htmlType="email"
                    icon="fas fa-at"
                    required={true}
                    value="fakename@example.org"
                    setValue={v => console.log(v)}
                />
            </div>
            <div className="column">
                <InputField
                    label="Phone"
                    htmlName="last-name"
                    htmlType="tel"
                    icon="fas fa-phone"
                    required={true}
                    value="5555555555"
                    setValue={v => console.log(v)}
                />
            </div>
        </div>
    </div>
);