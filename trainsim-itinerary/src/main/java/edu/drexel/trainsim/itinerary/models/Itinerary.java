package edu.drexel.trainsim.itinerary.models;

import java.util.List;
import java.util.UUID;

public class Itinerary {
    private final UUID id;
    private final List<Leg> legs;

    public Itinerary(UUID id, List<Leg> legs) {
        this.id = id;
        this.legs = legs;
    }

    public UUID getId() {
        return id;
    }

    public List<Leg> getLegs() {
        return legs;
    }
}