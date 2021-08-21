package edu.drexel.trainsim.web;

import io.javalin.Javalin;

public interface Controller {
    void bindRoutes(Javalin app);
}
