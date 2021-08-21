package edu.drexel.trainsim.itinerary.db;

import java.util.List;
import java.util.UUID;

import edu.drexel.trainsim.itinerary.models.Place;

@FunctionalInterface
public interface StorePlaces {
    void call(UUID legId, List<Place> places);
}