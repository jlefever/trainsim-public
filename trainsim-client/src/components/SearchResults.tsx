import "bulma/css/bulma.css";
import React from "react";
import { Itinerary, Leg } from "../models";

interface SearchResultsProps {
    itineraries: Itinerary[];
}

function getStart(itinerary: Itinerary): Date {
    return new Date(itinerary.legs[0].places[0].departAt);
}

function getEnd(itinerary: Itinerary): Date {
    const legs = itinerary.legs;
    const places = legs[legs.length - 1].places;
    return new Date(places[places.length - 1].arriveAt);
}

function toDateStr(date: Date): string {
    return date.toLocaleDateString("en-US");
}

function toTimeStr(date: Date): string {
    return date.toLocaleTimeString("en-US", { hour: "numeric", minute: "2-digit" });
}

function getNumSegments(legs: Leg[]): number {
    return legs.filter(l => l.routeId).length;
}

export default class SearchResults extends React.Component<SearchResultsProps> {
    constructor(props: SearchResultsProps) {
        super(props);
    }

    override render() {
        return this.props.itineraries.map(i => <div className="box">
            <div className="columns is-vcentered">
                <div className="column is-7">
                    <div className="columns is-vcentered">
                        <div className="column is-5">
                            <div className="has-text-centered">
                                <div className="is-inline-block has-text-justified">
                                    <p className="has-text-weight-light is-uppercase is-size-7 pb-2">Departs</p>
                                    <p><span className="is-size-1">{toTimeStr(getStart(i))}</span></p>
                                    <p className="is-size-7">{toDateStr(getStart(i))}</p>
                                </div>
                            </div>
                        </div>
                        <div className="column is-2">
                            <div className="has-text-centered">
                                <span className="icon is-size-1"><i className="fas fa-long-arrow-alt-right"></i></span>
                                <p className="has-text-weight-light is-family-secondary is-size-7">1h 10m</p>
                                <p className="has-text-weight-medium is-family-secondary is-size-7">{getNumSegments(i.legs)} Segments</p>
                                <p className="has-text-weight-medium is-family-secondary is-size-7"><a href="#">Details</a></p>
                            </div>
                        </div>
                        <div className="column is-5">
                            <div className="has-text-centered">
                                <div className="is-inline-block has-text-justified">
                                    <p className="has-text-weight-light is-uppercase is-size-7 pb-2">Arrives</p>
                                    <p><span className="is-size-1">{toTimeStr(getEnd(i))}</span></p>
                                    <p className="is-size-7">{toDateStr(getEnd(i))}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="column">
                    <div className="buttons">
                        <button className="button is-fullwidth is-primary has-text-weight-bold is-outlined">Coach - $21</button>
                        <button className="button is-fullwidth is-primary has-text-weight-bold">
                            <span className="icon is-small"><i className="fas fa-check"></i></span>
                            <span>Business - $31</span>
                        </button>
                    </div>
                </div>
            </div>
        </div>)
    }
}