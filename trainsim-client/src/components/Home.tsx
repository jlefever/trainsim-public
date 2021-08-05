import "@fortawesome/fontawesome-free/css/all.css";
import "bulma/css/bulma.css";
import React from "react";
import { Itinerary } from "../models";
import Banner from "./Banner";
import SearchForm from "./SearchForm";
import SearchResults from "./SearchResults";

// export default () => <>
//     <Banner />
//     <SearchForm setItineraries={items => console.log(items)}/>
// </>;


interface HomeState {
    itineraries?: Itinerary[];
}

export default class Home extends React.Component<{}, HomeState> {
    constructor(props: {}) {
        super(props);
        this.state = { itineraries: undefined };
    }

    override render() {
        if (this.state.itineraries) {
            return <SearchResults itineraries={this.state.itineraries} />;
        }

        return <>
            <Banner />
            <SearchForm setItineraries={itineraries => this.setState({ itineraries })} />
        </>;
    }
}