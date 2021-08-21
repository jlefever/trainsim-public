package edu.drexel.trainsim.itinerary.otp;

import org.sql2o.Sql2o;

public class Prepopulater {
    private final Sql2o db;
    private final OtpClient client;

    public Prepopulater(Sql2o db, OtpClient client) {
        this.db = db;
        this.client = client;
    }

    public void prepopulate() {
        // There is a race condition between checking if there are stops and adding them.
        // (If there are many servers running.)
        // This would have to be fixed before running in a production environment.
        
        if (!hasStops()) {
            System.out.println("Loading stops...");
            loadStops();
        }

        if (!hasRoutes()) {
            System.out.println("Loading routes...");
            loadRoutes();
        }
    }

    private void loadStops() {
        var json = this.client.getAllStops();

        try (var con = this.db.open()) {
            con.createQuery("CALL otp.load_stops(CAST(:stops AS JSON))")
                .addParameter("stops", json)
                .executeUpdate();
        }
    }

    private void loadRoutes() {
        var json = this.client.getAllRoutes();
        
        try (var con = this.db.open()) {
            con.createQuery("CALL otp.load_routes(CAST(:routes AS JSON))")
                .addParameter("routes", json)
                .executeUpdate();
        }
    }

    private boolean hasStops() {
        try (var con = this.db.open()) {
            return con.createQuery("SELECT EXISTS(SELECT 1 FROM otp.stops)")
                .executeAndFetch(Boolean.class).get(0);
        }
    }

    private boolean hasRoutes() {
        try (var con = this.db.open()) {
            return con.createQuery("SELECT EXISTS(SELECT 1 FROM otp.routes)")
                .executeAndFetch(Boolean.class).get(0);
        }
    }
}
