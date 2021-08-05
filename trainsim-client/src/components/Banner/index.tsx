import React from "react";

import "bulma/css/bulma.css";
import train from "./train.svg";

export default () => <>
    <div className="has-text-centered">
        <h1 className="title is-size-2 mb-6">Book a train ticket today!</h1>
        <p className="subtitle">This is a fake website. We don't actually book any tickets for you.</p>
    </div>
    <div className="has-text-centered">
        {/* https://all-free-download.com/free-vector/download/classic-locomotive-train_312396.html */}
        <img style={{ "height": "550px", "width": "auto" }} src={train} />
    </div>
</>;