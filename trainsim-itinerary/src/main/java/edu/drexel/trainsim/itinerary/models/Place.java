package edu.drexel.trainsim.itinerary.models;

import java.util.UUID;

public class Place {
    private final UUID id;
    private final String stopId;
    private final long arriveAt;
    private final long departAt;

    public Place(UUID id, String stopId, long arriveAt, long departAt) {
        this.id = id;
        this.stopId = stopId;
        this.arriveAt = arriveAt;
        this.departAt = departAt;
    }

    public UUID getId() {
        return id;
    }

    public String getStopId() {
        return stopId;
    }

    public long getArriveAt() {
        return arriveAt;
    }

    public long getDepartAt() {
        return departAt;
    }
}
