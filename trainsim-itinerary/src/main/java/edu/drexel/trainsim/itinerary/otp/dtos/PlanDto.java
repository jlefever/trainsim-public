package edu.drexel.trainsim.itinerary.otp.dtos;

public class PlanDto {
    private final ItineraryDto[] itineraries;

    public PlanDto(ItineraryDto[] itineraries) {
        this.itineraries = itineraries;
    }

    public ItineraryDto[] getItineraries() {
        return itineraries;
    }
}
