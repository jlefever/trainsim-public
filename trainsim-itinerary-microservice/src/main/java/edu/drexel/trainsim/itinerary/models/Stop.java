package edu.drexel.trainsim.itinerary.models;

public class Stop {
    private int id;
    private String otpId;
    private String name;

    public Stop(int id, String otpId, String name) {
        this.id = id;
        this.otpId = otpId;
        this.name = name;
    }

    public int getId() {
        return id;
    }

    public String getName() {
        return name;
    }

    public String getOtpId() {
        return otpId;
    }
}
