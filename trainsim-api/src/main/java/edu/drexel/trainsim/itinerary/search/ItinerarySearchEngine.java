package edu.drexel.trainsim.itinerary.search;

import java.util.Collection;

import edu.drexel.trainsim.itinerary.models.Itinerary;

public interface ItinerarySearchEngine {
    Collection<? extends Itinerary> search(ItinerarySearch search);
}
