package edu.drexel.trainsim.itinerary.search;

import edu.drexel.trainsim.itinerary.models.SearchResult;

public interface ItinerarySearchEngine {
    SearchResult search(ItinerarySearch search);
}
