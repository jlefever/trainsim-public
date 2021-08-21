package edu.drexel.trainsim.db.commands;

import edu.drexel.trainsim.db.models.User;

@FunctionalInterface
public interface GetOrCreateGoogleUser {
    User call(String email);
}
