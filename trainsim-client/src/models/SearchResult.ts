import Itinerary from "./Itinerary";

export default class SearchResult {
    private readonly _outboundItineraries: Itinerary[];
    private readonly _returnItineraries: Itinerary[];

    constructor(outboundItins: Itinerary[], returnItins: Itinerary[]) {
        this._outboundItineraries = outboundItins;
        this._returnItineraries = returnItins;
    }

    public get outboundItineraries(): Itinerary[] {
        return this._outboundItineraries;
    }

    public get returnItineraries(): Itinerary[] {
        return this._returnItineraries;
    }
}