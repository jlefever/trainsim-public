package edu.drexel.trainsim.itinerary.db;

import java.util.List;

import edu.drexel.trainsim.itinerary.models.Itinerary;

@FunctionalInterface
public interface StoreItineraries {
    void call(List<Itinerary> itineraries);
}