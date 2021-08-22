package edu.drexel.trainsim.itinerary.otp.dtos;

public class LegDto {
    private final String routeId;
    private final PlaceDto from;
    private final PlaceDto to;
    private final PlaceDto[] intermediateStops;
    private final double distance;

    public LegDto(String routeId, PlaceDto from, PlaceDto to, PlaceDto[] intermediateStops, double distance) {
        this.routeId = routeId;
        this.from = from;
        this.to = to;
        this.intermediateStops = intermediateStops;
        this.distance = distance;
    }

    public String getRouteId() {
        return this.routeId;
    }

    public PlaceDto getFrom() {
        return this.from;
    }

    public PlaceDto getTo() {
        return this.to;
    }

    public PlaceDto[] getIntermediateStops() {
        if (this.intermediateStops == null) {
            return new PlaceDto[0];
        }

        return this.intermediateStops;
    }

    public double getDistance() {
        return this.distance;
    }
}
