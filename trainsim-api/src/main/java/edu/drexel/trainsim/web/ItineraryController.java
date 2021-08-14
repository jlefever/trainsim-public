package edu.drexel.trainsim.web;

import com.google.inject.Inject;

import edu.drexel.trainsim.itinerary.search.ItinerarySearch;
import edu.drexel.trainsim.itinerary.search.ItinerarySearchEngine;
import io.javalin.Javalin;
import io.javalin.http.Context;

public class ItineraryController implements Controller {
    private final ItinerarySearchEngine engine;

    @Inject
    public ItineraryController(ItinerarySearchEngine engine) {
        this.engine = engine;
    }

    public void bindRoutes(Javalin app) {
        app.post("/api/query", ctx -> this.search(ctx));
    }

    private void search(Context ctx) throws Exception {
        ItinerarySearch search = ctx.bodyAsClass(ItinerarySearch.class);
        ctx.json(this.engine.search(search));
    }
}
