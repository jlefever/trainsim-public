import React, { ReactElement } from "react";
import ItinerarySearch from "../models/ItinerarySearch";
import Stop from "../models/Stop";
import ItineraryProvider from "../providers/ItineraryProvider";
import DateField from "./DateField";
import RangeDropdown from "./RangeDropdown";
import SearchResultPage from "./SearchResultPage";
import StopDropdown from "./StopDropdown";

interface SearchFormState {
    source?: Stop;
    target?: Stop;
    departDate: Date;
    returnDate: Date;
    travelers: number;
    isRoundTrip: boolean;
    isLoading: boolean;
}

interface SearchFormProps {
    stops: readonly Stop[];
    setPage: (page: ReactElement) => void;
}

// https://stackoverflow.com/a/19691491
function addDays(date: Date, days: number) {
    const result = new Date(date);
    result.setDate(result.getDate() + days);
    return result;
};

export default class SearchForm extends React.Component<SearchFormProps, SearchFormState> {
    private readonly itineraryProvider: ItineraryProvider;

    constructor(props: SearchFormProps) {
        super(props);
        this.state = {
            source: undefined,
            target: undefined,
            departDate: new Date(),
            returnDate: addDays(new Date(), 3),
            travelers: 1,
            isRoundTrip: false,
            isLoading: false
        };

        this.itineraryProvider = new ItineraryProvider();
        this.submit = this.submit.bind(this);
    }

    submit() {
        this.setState({ isLoading: true });

        const { source, target, departDate, returnDate, travelers, isRoundTrip } = this.state;

        const search = isRoundTrip ?
            ItinerarySearch.roundTrip(source!, target!, departDate, returnDate, travelers) :
            ItinerarySearch.oneWay(source!, target!, departDate, travelers);

        const { setPage } = this.props;

        this.itineraryProvider.fetchItineraries(search, res =>
            setPage(<SearchResultPage search={search} itineraries={res} setPage={setPage} />
        ));
    }

    isValidSearch() {
        const { source, target, departDate, returnDate, travelers, isRoundTrip } = this.state;
        return source && target && departDate && (isRoundTrip ? returnDate : true) && (travelers > 0);
    }

    override render() {
        return <div className="pt-5">
            <div className="tabs is-centered">
                <ul>
                    <li className={this.state.isRoundTrip ? "" : "is-active"}>
                        <a onClick={_ => this.setState({ isRoundTrip: false })}>One-Way</a>
                    </li>
                    <li className={this.state.isRoundTrip ? "is-active" : ""}>
                        <a onClick={_ => this.setState({ isRoundTrip: true })}>Round-Trip</a>
                    </li>
                </ul>
            </div>
            <div className="columns">
                <div className="column">
                    <StopDropdown
                        name="From"
                        stops={this.props.stops}
                        value={this.state.source}
                        onChange={source => this.setState({ source })}
                    />
                </div>
                <div className="column">
                    <StopDropdown
                        name="To"
                        stops={this.props.stops}
                        value={this.state.target}
                        onChange={target => this.setState({ target })}
                    />
                </div>
            </div>
            <div className="columns">
                <div className="column is-5">
                    <DateField
                        name="Depart"
                        min={new Date()}
                        max={this.state.isRoundTrip ? this.state.returnDate : null}
                        value={this.state.departDate}
                        onChange={departDate => this.setState({ departDate })}
                    />
                </div>
                <div className="column is-5">
                    <DateField
                        name="Return"
                        min={this.state.departDate}
                        value={this.state.returnDate}
                        onChange={returnDate => this.setState({ returnDate })}
                        disabled={!this.state.isRoundTrip}
                    />
                </div>
                <div className="column is-2">
                    <RangeDropdown
                        name="Travelers"
                        icon="fas fa-user"
                        min={1}
                        max={10}
                        value={this.state.travelers}
                        onChange={travelers => this.setState({ travelers })}
                    />
                </div>
            </div>
            <div className="columns">
                <div className="column has-text-centered">
                    <button
                        className={`button is-medium is-fullwidth is-primary
                                    ${this.state.isLoading ? "is-loading" : ""}`}
                        onClick={_ => this.submit()}
                        disabled={!this.isValidSearch()}>
                        Find Trains
                    </button>
                </div>
            </div>
        </div>;
    }
}