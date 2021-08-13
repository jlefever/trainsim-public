import React, { Component, ReactElement } from "react";
import Itinerary from "../models/Itinerary";
import ItinerarySearch from "../models/ItinerarySearch";
import PurchaseStage from "../models/PurchaseStage";
import ProgressTracker from "./PurchaseTracker";
import SearchHeader from "./SearchHeader";
import SearchResultItem from "./SearchResultItem";
import TravelerInfoPage from "./TravelerInfoPage";

interface SearchResultPageProps {
    search: ItinerarySearch;
    itineraries: readonly Itinerary[];
    setPage: (page: ReactElement) => void;
}

export default class SearchResultPage extends Component<SearchResultPageProps> {
    constructor(props: SearchResultPageProps) {
        super(props);
    }

    override render() {
        const { search, itineraries, setPage } = this.props;

        const message = itineraries.length !== 0 ?
            "Please select one of the following itineraries." :
            "No results found.";

        return <div>
            <SearchHeader search={search} />
            <ProgressTracker currentStage={PurchaseStage.SelectItinerary} />

            <hr />

            <div className="content">
                <h2 className="title is-3">Itineraries</h2>
                <p>{message}</p>

                {itineraries.map(i =>
                    <SearchResultItem
                        key={i.id}
                        itinerary={i}
                        select={() => setPage(<TravelerInfoPage search={search} itinerary={i} setPage={setPage} />)}
                    />
                )}
            </div>
        </div>
    }
}