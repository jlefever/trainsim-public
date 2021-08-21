package edu.drexel.trainsim.itinerary.db;

import java.util.List;
import java.util.UUID;

import org.sql2o.Sql2o;

import edu.drexel.trainsim.itinerary.models.Place;

public class StorePlacesImpl implements StorePlaces {
    private final Sql2o db;

    public StorePlacesImpl(Sql2o db) {
        this.db = db;
    }

    @Override
    public void call(UUID legId, List<Place> places) {
        var sql = "INSERT INTO otp.places (id, leg_id, stop_id, sort, arrive_at, depart_at) "
                + "VALUES (:id, :leg_id, (SELECT id FROM otp.stops WHERE otp_id = :stop_id), "
                + ":sort, :arrive_at, :depart_at);";

        try (var con = this.db.open()) {
            var query = con.createQuery(sql);

            var sort = 0;
            for (var place : places) {
                query.addParameter("id", place.getId())
                    .addParameter("leg_id", legId)
                    .addParameter("stop_id", place.getStopId())
                    .addParameter("sort", sort)
                    .addParameter("arrive_at", place.getArriveAt())
                    .addParameter("depart_at", place.getDepartAt())
                    .addToBatch();
                sort += 1;
            }

            query.executeBatch();
        }
    }
}
