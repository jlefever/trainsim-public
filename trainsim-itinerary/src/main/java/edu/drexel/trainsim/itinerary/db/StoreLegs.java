package edu.drexel.trainsim.itinerary.db;

import java.util.List;
import java.util.UUID;

import edu.drexel.trainsim.itinerary.models.Leg;

@FunctionalInterface
public interface StoreLegs {
    void call(UUID itineraryId, List<Leg> legs);
}