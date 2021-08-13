import React from "react";
import PurchaseStage from "../models/PurchaseStage";

export interface PurchaseTrackerProps {
    currentStage: PurchaseStage;
};

export default (props: PurchaseTrackerProps) => {
    const getClassName = (stage: PurchaseStage) => props.currentStage === stage ? "is-active" : "";

    return <ul className="steps is-large is-centered has-content-centered">
        <li className={`steps-segment ${getClassName(PurchaseStage.Search)}`}>
            <span className="steps-marker">
                <span className="icon"><i className="fas fa-search"></i></span>
            </span>
            <div className="steps-content">
                <p className="heading">Search</p>
            </div>
        </li>
        <li className={`steps-segment ${getClassName(PurchaseStage.SelectItinerary)}`}>
            <span className="steps-marker">
                <span className="icon"><i className="fas fa-train"></i></span>
            </span>
            <div className="steps-content">
                <p className="heading">Select Train</p>
            </div>
        </li>
        <li className={`steps-segment ${getClassName(PurchaseStage.EnterTravelerInfo)}`}>
            <span className="steps-marker">
                <span className="icon"><i className="fas fa-user"></i></span>
            </span>
            <div className="steps-content">
                <p className="heading">Enter Traveler Info</p>
            </div>
        </li>
        <li className={`steps-segment ${getClassName(PurchaseStage.Checkout)}`}>
            <span className="steps-marker">
                <span className="icon">
                    <i className="fas fa-dollar-sign"></i>
                </span>
            </span>
            <div className="steps-content">
                <p className="heading">Checkout</p>
            </div>
        </li>
        <li className={`steps-segment ${getClassName(PurchaseStage.Confirmation)}`}>
            <span className="steps-marker">
                <span className="icon">
                    <i className="fas fa-check"></i>
                </span>
            </span>
            <div className="steps-content">
                <p className="heading">Confirmation</p>
            </div>
        </li>
    </ul>;
}