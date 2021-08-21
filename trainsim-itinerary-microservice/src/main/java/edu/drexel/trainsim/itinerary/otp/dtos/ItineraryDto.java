package edu.drexel.trainsim.itinerary.otp.dtos;

public class ItineraryDto {
    private final LegDto[] legs;

    public ItineraryDto(LegDto[] legs) {
        this.legs = legs;
    }

    public LegDto[] getLegs() {
        return legs;
    }
}
