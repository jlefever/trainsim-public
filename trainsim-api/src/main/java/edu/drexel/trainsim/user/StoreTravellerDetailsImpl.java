package edu.drexel.trainsim.user;

import com.google.inject.Inject;
import edu.drexel.trainsim.db.models.User;
import edu.drexel.trainsim.user.model.TravellerDetails;
import org.sql2o.Sql2o;

public class StoreTravellerDetailsImpl implements StoreTravelerDetails {
    private final Sql2o db;

    @Inject
    public StoreTravellerDetailsImpl(Sql2o db) {
        this.db = db;
    }

    @Override
    public User call(TravellerDetails travellerDetails) {
        String sql = "SELECT id, email, first_name, last_name, email_send_transaction_detail, phone FROM users WHERE email = :email";

        try (var con = this.db.open()) {
            var res = con.createQuery(sql).addParameter("email", travellerDetails.getUserLogInEmail()).executeAndFetch(User.class);

            // Below three logic check later
            // if login email is in request but not in db insert
            // if login email is in request and also in db - update
            // if login email is not in request, create a unique guest id and insert
            if (res.isEmpty()) {
                sql = "INSERT INTO users(email, first_name, last_name, email_send_transaction_detail, phone) "
                        + "VALUES(:email, :first_name, :last_name, :email_send_transaction_detail, :phone) RETURNING email, first_name, last_name, email_send_transaction_detail, phone";
                return con.createQuery(sql).addParameter("email", travellerDetails.getUserLogInEmail().trim())
                        .addParameter("first_name", travellerDetails.getFirstName().trim())
                        .addParameter("last_name", travellerDetails.getLastName().trim())
                        .addParameter("email_send_transaction_detail", travellerDetails.getEmailToSendDetails().trim())
                        .addParameter("phone", travellerDetails.getPhone().trim())
                        .executeAndFetch(User.class).get(0);
            }
            return res.get(0);
        }
    }
}
