package edu.drexel.trainsim.web;

import com.google.inject.Inject;

import edu.drexel.trainsim.itinerary.db.GetAllStops;
import io.javalin.Javalin;
import io.javalin.http.Context;

public class StopController implements Controller {
    private final GetAllStops getAllStops;

    @Inject
    public StopController(GetAllStops getAllStops) {
        this.getAllStops = getAllStops;
    }

    public void bindRoutes(Javalin app) {
        app.get("/api/stops", ctx -> this.getAllStops(ctx));
    }

    private void getAllStops(Context ctx) {
        ctx.json(this.getAllStops.call());
    }
}
