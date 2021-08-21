package edu.drexel.trainsim.itinerary.otp.dtos;

public class PlaceDto {
    private final String stopId;
    private final long arrival;
    private final long departure;

    public PlaceDto(String stopId, long arriveAt, long departAt) {
        this.stopId = stopId;
        this.arrival = arriveAt;
        this.departure = departAt;
    }

    public String getStopId() {
        return this.stopId;
    }


    public long getArriveAt() {
        return this.arrival;
    }


    public long getDepartAt() {
        return this.departure;
    }
}
