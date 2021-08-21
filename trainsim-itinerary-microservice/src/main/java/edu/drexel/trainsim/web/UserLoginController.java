package edu.drexel.trainsim.web;

import com.google.inject.Inject;
import edu.drexel.trainsim.db.commands.GetOrCreateGoogleUser;
import io.javalin.Javalin;
import io.javalin.http.Context;

public class UserLoginController implements Controller {
    private final GetOrCreateGoogleUser getOrCreateGoogleUser;

    @Inject
    public UserLoginController(GetOrCreateGoogleUser cmd) {
        this.getOrCreateGoogleUser = cmd;
    }

    public void bindRoutes(Javalin app) {
        app.get("/api/user", ctx -> this.getUserByEmail(ctx));
    }

    private void getUserByEmail(Context ctx) {
        // Notice that there is absolutely no server-side validation that this is real signed-in Google user.
        // We have to make a call to a Google API to verify this.
        var email = ctx.queryParam("email");
        ctx.json(getOrCreateGoogleUser.call(email));
    }
}