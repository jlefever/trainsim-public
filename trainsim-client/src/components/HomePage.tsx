import React, { Component, ReactElement } from "react";
import Stop from "../models/Stop";
import { StopProvider } from "../providers/StopProvider";
import Banner from "./Banner";
import SearchForm from "./SearchForm";

export interface HomePageProps {
    setPage: (page: ReactElement) => void;
}

interface HomePageState {
    stops: readonly Stop[]
}

export default class HomePage extends Component<HomePageProps, HomePageState> {
    private readonly stopProvider: StopProvider;

    constructor(props: HomePageProps) {
        super(props);
        this.state = { stops: [] };
        this.stopProvider = new StopProvider();
    }

    override componentDidMount() {
        this.stopProvider.fetchStops(stops => this.setState({ stops }));
    }

    override render() {
        return <>
            <Banner />
            <SearchForm setPage={this.props.setPage} stops={this.state.stops} />
        </>;
    }
}