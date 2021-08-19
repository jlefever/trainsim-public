package edu.drexel.trainsim.itinerary.models;

import java.util.List;

public class SearchResult {
    private final List<Itinerary> outboundItineraries;
    private final List<Itinerary> returnItineraries;

    public SearchResult(List<Itinerary> outboundItins, List<Itinerary> returnItins) {
        outboundItineraries = outboundItins;
        returnItineraries = returnItins;
    }

    public List<Itinerary> getOutboundItineraries() {
        return outboundItineraries;
    }

    public List<Itinerary> getReturnItineraries() {
        return returnItineraries;
    }
}