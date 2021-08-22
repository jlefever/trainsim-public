package edu.drexel.trainsim.itinerary.db;

import java.util.List;

import com.google.inject.Inject;

import org.sql2o.Sql2o;

import edu.drexel.trainsim.itinerary.models.Stop;

public class GetAllStopsImpl implements GetAllStops {
    private final Sql2o db;

    @Inject
    public GetAllStopsImpl(Sql2o db) {
        this.db = db;
    }

    public List<Stop> call() {
        var sql = "SELECT id, otp_id AS otpId, name FROM otp.stops WHERE otp_id LIKE '2:%' ORDER BY name";
        
        try (var con = this.db.open()) {
            return con.createQuery(sql).executeAndFetch(Stop.class);
        }
    }
}
