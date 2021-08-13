import React, { Component, ReactElement } from "react";
import Itinerary from "../models/Itinerary";
import ItinerarySearch from "../models/ItinerarySearch";
import PurchaseStage from "../models/PurchaseStage";
import CheckoutPage from "./CheckoutPage";
import NavButtonBar from "./NavButtonBar";
import ProgressTracker from "./PurchaseTracker";
import SearchHeader from "./SearchHeader";
import TravelerForm from "./TravelerForm";

export interface TravelerInfoPageProps {
    search: ItinerarySearch;
    itinerary: Itinerary;
    setPage: (page: ReactElement) => void;
}

interface TravelerInfoPageState { }

export default class TravelerInfoPage extends Component<TravelerInfoPageProps, TravelerInfoPageState> {
    constructor(props: TravelerInfoPageProps) {
        super(props);
    }

    override render() {
        const { search, itinerary, setPage } = this.props;

        const travelerBlocks = new Array<ReactElement>();

        for (let i = 1; i <= search.travelers; i++) {
            travelerBlocks.push(<div key={i} className="block pt-5">
                <h3 className="title is-5">Traveler {i}</h3>
                <TravelerForm />
            </div>);
        }

        return <div>
            <SearchHeader search={search} />
            <ProgressTracker currentStage={PurchaseStage.EnterTravelerInfo} />

            <hr />

            <div className="content">
                <h2 className="title is-3">Traveler Details</h2>
                <p>Please give us some information on who will be traveling.</p>
                <div>{travelerBlocks}</div>
            </div>
            <NavButtonBar
                onBack={() => console.log("Back")}
                onNext={() => setPage(<CheckoutPage search={search} itinerary={itinerary} setPage={setPage} />)}
            />
        </div>
    }
}