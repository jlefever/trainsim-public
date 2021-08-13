import React from "react";
import ItinerarySearch from "../models/ItinerarySearch";

export interface SearchHeaderProps {
    search: ItinerarySearch;
};

export default (props: SearchHeaderProps) => <div className="content">
    <h1 className="title is-1">{props.search.source.name} <em className="has-text-weight-normal">to</em> {props.search.target.name}</h1>
    <p className="subtitle">Traveling as <strong>{props.search.travelers}</strong> {props.search.travelers > 1 ? "people" : "person"}</p>
    {
        props.search.returnDate &&
        <div className="notification is-warning">
            We are showing results for <strong>One-Way</strong> as <strong>Round-Trip</strong> has not yet been implemented.
        </div>
    }
</div>