package edu.drexel.trainsim.itinerary;

import com.google.inject.AbstractModule;
import com.google.inject.Provides;

import edu.drexel.trainsim.itinerary.otp.ItinerarySearchEngineImpl;
import edu.drexel.trainsim.itinerary.otp.OtpClient;
import edu.drexel.trainsim.itinerary.search.ItinerarySearchEngine;

public class ItineraryModule extends AbstractModule {
    private final OtpClient client;

    public ItineraryModule(String baseUrl) throws Exception {
        this.client = new OtpClient(baseUrl);
    }

    @Provides
    public OtpClient getOtpClient() {
        return this.client;
    }

    @Provides
    public ItinerarySearchEngine getItinerarySearchEngine() {
        return new ItinerarySearchEngineImpl(this.client);
    }
}
