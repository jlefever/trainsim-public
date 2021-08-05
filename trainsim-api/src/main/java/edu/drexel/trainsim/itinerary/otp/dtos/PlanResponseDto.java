package edu.drexel.trainsim.itinerary.otp.dtos;

public class PlanResponseDto {
    private final PlanDto plan;

    public PlanResponseDto(PlanDto plan) {
        this.plan = plan;
    }

    public PlanDto getPlan() {
        return plan;
    }
}
