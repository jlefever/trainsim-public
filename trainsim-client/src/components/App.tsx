import React, { Component, ReactElement } from "react";
import GoogleLoginField from "./GoogleLoginField";
import HomePage from "./HomePage";

interface AppState {
    currentPage: ReactElement;
}

export default class App extends Component<{}, AppState> {
    constructor(props: {}) {
        super(props);
        this.setPage = this.setPage.bind(this);
        this.state = { currentPage: <HomePage setPage={this.setPage} /> };
    }

    setPage(page: ReactElement) {
        this.setState({ currentPage: page });
    }

    override render() {
        return <section className="section mt-1 pt-1">
            <div className="container is-max-widescreen">
                <nav aria-label="main navigation" className="navbar is-white mt-5 mb-5" role="navigation">
                    <div className="navbar-brand">
                        <a className="navbar-item has-text-weight-bold" href="/">
                            <span>trainsim</span>
                        </a>
                    </div>
                    <div className="navbar-menu" id="navbar">
                        <div className="navbar-end">
                            <GoogleLoginField />
                        </div>
                    </div>
                </nav>
                {this.state.currentPage}
                <footer className="footer has-background-white">
                    <nav className="level">
                        <div className="level-left">
                            <small className="level-item"><a className="has-text-dark" href="/">trainsim</a></small>
                            <small className="level-item">&copy; {new Date().getFullYear()}</small>

                        </div>
                        <div className="level-right">
                            <small className="level-item"><a className="has-text-dark" href="#">Privacy</a></small>
                            <small className="level-item"><a className="has-text-dark" href="#">FAQs</a></small>
                            <small className="level-item"><a className="has-text-dark" href="#">Support</a></small>
                        </div>
                    </nav>
                </footer>
            </div>
        </section>;
    }
}