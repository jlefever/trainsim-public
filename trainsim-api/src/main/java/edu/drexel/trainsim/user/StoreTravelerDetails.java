package edu.drexel.trainsim.user;

import edu.drexel.trainsim.user.model.TravellerDetails;

@FunctionalInterface
public interface StoreTravelerDetails {
    Object call(TravellerDetails travellerDetails);
}
