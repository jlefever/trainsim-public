package edu.drexel.trainsim.db;

import com.google.gson.Gson;
import com.google.inject.AbstractModule;
import com.google.inject.Provides;
import com.zaxxer.hikari.HikariConfig;
import com.zaxxer.hikari.HikariDataSource;

import org.sql2o.Sql2o;

import edu.drexel.trainsim.itinerary.db.GetAllStops;
import edu.drexel.trainsim.itinerary.db.GetAllStopsImpl;

public class DatabaseModule extends AbstractModule {
    private final Sql2o db;
    private Gson gson;
    
    public DatabaseModule(HikariConfig config) {
        this.db = new Sql2o(new HikariDataSource(config));
        this.gson = new Gson();
    }

    @Override
    protected void configure() {
        bind(GetAllStops.class).to(GetAllStopsImpl.class);
    }

    @Provides
    public Sql2o getDb() {
        return this.db;
    }

    @Provides
    public Gson getGson() {
        return this.gson; 
    }
}
