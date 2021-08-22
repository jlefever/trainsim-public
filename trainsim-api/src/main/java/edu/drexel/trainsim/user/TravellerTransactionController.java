package edu.drexel.trainsim.user;

import com.google.inject.Inject;
import edu.drexel.trainsim.db.commands.GetOrCreateGoogleUser;
import edu.drexel.trainsim.user.model.TravellerDetails;
import edu.drexel.trainsim.web.Controller;
import io.javalin.Javalin;
import io.javalin.http.Context;

public class TravellerTransactionController implements Controller {
    private final StoreTravelerDetails storeTravelerDetails;

    @Inject
    public TravellerTransactionController(StoreTravelerDetails storeTravelerDetails) {
        this.storeTravelerDetails = storeTravelerDetails;
    }

    @Override
    public void bindRoutes(Javalin app) {
        app.get("/api/storeDetails", ctx -> this.storeDetails(ctx));
    }

    private void storeDetails(Context ctx) {
        var email = ctx.queryParam("email");
        var firstName = ctx.queryParam("firstName");
        var lastName = ctx.queryParam("lastName");
        var emailToSendDetails = ctx.queryParam("emailToSendDetails");
        var phone = ctx.queryParam("phone");
        ctx.json(storeTravelerDetails.call(new TravellerDetails(email, firstName, lastName, emailToSendDetails, phone)));
    }
}
