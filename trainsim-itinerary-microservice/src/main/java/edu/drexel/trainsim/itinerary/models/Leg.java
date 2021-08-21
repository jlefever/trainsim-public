package edu.drexel.trainsim.itinerary.models;

import java.util.List;
import java.util.UUID;

public class Leg {
    private final UUID id;
    private final String routeId;
    private final List<Place> places;
    private final double distance;

    public Leg(UUID id, String routeId, List<Place> places, double distance) {
        this.id = id;
        this.routeId = routeId;
        this.places = places;
        this.distance = distance;
    }

    public UUID getId() {
        return id;
    }

    public String getRouteId() {
        return routeId;
    }

    public List<Place> getPlaces() {
        return places;
    }

    public double getDistance() {
        return distance;
    }
}
