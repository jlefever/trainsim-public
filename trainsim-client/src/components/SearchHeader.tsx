import React from "react";
import ItinerarySearch from "../models/ItinerarySearch";
import SearchResult from "../models/SearchResult";

export interface SearchHeaderProps {
    search: ItinerarySearch;
    searchResult: SearchResult | null;
};

export default (props: SearchHeaderProps) => {
    var message;
    if(props.searchResult?.outboundItineraries.length == 0) {
        message = "No results found."
    } else if(props.search.returnDate && props.searchResult?.returnItineraries.length == 0) {
        message = "No results found for return trip, showing outbound trips only."
    }
    return <div className="content">


        <h1 className="title is-1">{props.search.source.name} <em className="has-text-weight-normal">to</em> {props.search.target.name}</h1>
        <p className="subtitle">Traveling as <strong>{props.search.travelers}</strong> {props.search.travelers > 1 ? "people" : "person"}</p>
        {
            message &&
            <div className="notification is-danger">
                {message}
            </div>
        }
    </div>
}