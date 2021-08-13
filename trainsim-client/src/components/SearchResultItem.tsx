import dayjs from "dayjs";
import duration from "dayjs/plugin/duration";
import React from "react";
import Itinerary from "../models/Itinerary";

// We use dayjs to help show times
dayjs.extend(duration);

export interface SearchResultItemProps {
    itinerary: Itinerary;
    select: () => void;
};

export default (props: SearchResultItemProps) => (
    <div className="box">
        <div className="columns is-vcentered">
            <div className="column is-7">
                <div className="columns is-vcentered">
                    <div className="column is-5">
                        <div className="has-text-centered">
                            <div className="is-inline-block has-text-justified">
                                <p className="has-text-weight-light is-uppercase is-size-7 pb-2">Departs</p>
                                <p>
                                    <span className="is-size-1">
                                        {toTimeStr(props.itinerary.startDate)}
                                    </span>
                                </p>
                                <p className="is-size-7">
                                    {toDateStr(props.itinerary.startDate)}
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="column is-2">
                        <div className="has-text-centered">
                            <span className="icon is-size-1"><i className="fas fa-long-arrow-alt-right"></i></span>
                            <p className="has-text-weight-light is-family-secondary is-size-7">
                                {dayjs.duration(props.itinerary.duration).format("H[h] m[m]")}
                            </p>
                            <p className="has-text-weight-medium is-family-secondary is-size-7">
                                {getTransferText(props.itinerary.numTransfers)}
                            </p>
                            <p className="has-text-weight-medium is-family-secondary is-size-7"><a href="#">Details</a></p>
                        </div>
                    </div>
                    <div className="column is-5">
                        <div className="has-text-centered">
                            <div className="is-inline-block has-text-justified">
                                <p className="has-text-weight-light is-uppercase is-size-7 pb-2">Arrives</p>
                                <p><span className="is-size-1">{toTimeStr(props.itinerary.endDate)}</span></p>
                                <p className="is-size-7">{toDateStr(props.itinerary.endDate)}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="column">
                <div className="has-text-centered is-size-1 has-text-weight-light pb-4">
                    $31
                </div>
                <div className="buttons">
                    <button
                        className="button is-fullwidth is-primary has-text-weight-bold"
                        onClick={_ => props.select()} >
                        Select
                    </button>
                </div>
            </div>
        </div>
    </div>
);

function toDateStr(date: Date): string {
    return dayjs(date).format("ddd MMM D, YYYY")
}

function toTimeStr(date: Date): string {
    return dayjs(date).format("h:mm a");
}

function getTransferText(numTransfers: number) {
    if (numTransfers === 0) {
        return "";
    }

    if (numTransfers === 1) {
        return "1 Transfer";
    }

    return `${numTransfers} Transfers`;
}