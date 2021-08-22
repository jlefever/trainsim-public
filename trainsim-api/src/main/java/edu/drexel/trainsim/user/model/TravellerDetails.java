package edu.drexel.trainsim.user.model;

import edu.drexel.trainsim.itinerary.models.Leg;

import java.util.List;
import java.util.UUID;

public class TravellerDetails {
    private final String userLogInEmail;
    private final String firstName;
    private final String lastName;
    private final String emailToSendDetails;
    private final String phone;

    public TravellerDetails(String userLogInEmail,
                            String firstName,
                            String lastName,
                            String emailToSendDetails,
                            String phone) {
        this.userLogInEmail = userLogInEmail;
        this.firstName = firstName;
        this.lastName = lastName;
        this.emailToSendDetails = emailToSendDetails;
        this.phone = phone;
    }

    public String getUserLogInEmail() {
        return userLogInEmail;
    }

    public String getFirstName() {
        return firstName;
    }

    public String getLastName() {
        return lastName;
    }

    public String getEmailToSendDetails() {
        return emailToSendDetails;
    }

    public String getPhone() {
        return phone;
    }
}
