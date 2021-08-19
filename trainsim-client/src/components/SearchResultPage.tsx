import React, { Component, ReactElement } from "react";
import Itinerary from "../models/Itinerary";
import SearchResult from "../models/SearchResult";
import ItinerarySearch from "../models/ItinerarySearch";
import PurchaseStage from "../models/PurchaseStage";
import ProgressTracker from "./PurchaseTracker";
import SearchHeader from "./SearchHeader";
import SearchResultItem from "./SearchResultItem";
import TravelerInfoPage from "./TravelerInfoPage";

interface SearchResultPageProps {
    search: ItinerarySearch;
    searchResult: SearchResult;
    setPage: (page: ReactElement) => void;
}

interface SearchResultPageState {
    isOutbound: boolean;
}

export default class SearchResultPage extends Component<SearchResultPageProps, SearchResultPageState> {
    constructor(props: SearchResultPageProps) {
        super(props);
        this.state = {isOutbound: true};
    }

    itinerarySelected(itin: Itinerary) {
        if(this.state.isOutbound && this.props.search.returnDate && this.props.searchResult.returnItineraries.length > 0) {
            this.setState({isOutbound: false});
        } else {
            const { search, searchResult, setPage } = this.props;
            setPage(<TravelerInfoPage search={search} itinerary={itin} setPage={setPage} />)
        }
        window.scrollTo(0, 0);
    }

    override render() {
        const { search, searchResult, setPage } = this.props;

        let message = this.state.isOutbound ? 
            <p>Please select one of the following itineraries.</p> : 
            <p>Please select one of the following itineraties for your <b>return</b> trip.</p>;
 

        let itineraries;
        if(this.state.isOutbound) {
            itineraries = searchResult.outboundItineraries;
        } else {
            itineraries = searchResult.returnItineraries;
        }

        const items = itineraries.map(i =>
            <SearchResultItem
                key={i.id}
                itinerary={i}
                select={() => this.itinerarySelected(i)}
            />
        )

        return <div>
            <SearchHeader search={search} searchResult={searchResult} isOutbound={this.state.isOutbound} />
            <ProgressTracker currentStage={PurchaseStage.SelectItinerary} />

            <hr />

            <div className="content">
                <h2 className="title is-3">Itineraries</h2>
                <p>{message}</p>

                {items}
            </div>
        </div>
    }
}