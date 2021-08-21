package edu.drexel.trainsim.itinerary.db;

import java.util.List;

import edu.drexel.trainsim.itinerary.models.Stop;

@FunctionalInterface
public interface GetAllStops {
    List<Stop> call();
}
