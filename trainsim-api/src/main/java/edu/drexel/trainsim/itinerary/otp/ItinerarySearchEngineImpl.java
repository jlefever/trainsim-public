package edu.drexel.trainsim.itinerary.otp;

import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.Collection;
import java.util.List;
import java.util.UUID;
import java.util.concurrent.ExecutionException;
import java.util.concurrent.TimeoutException;

import com.google.gson.Gson;

import org.eclipse.jetty.client.HttpClient;
import org.eclipse.jetty.client.api.ContentResponse;

import edu.drexel.trainsim.itinerary.models.Itinerary;
import edu.drexel.trainsim.itinerary.models.Leg;
import edu.drexel.trainsim.itinerary.models.Place;
import edu.drexel.trainsim.itinerary.otp.dtos.ItineraryDto;
import edu.drexel.trainsim.itinerary.otp.dtos.LegDto;
import edu.drexel.trainsim.itinerary.otp.dtos.PlanResponseDto;
import edu.drexel.trainsim.itinerary.search.ItinerarySearch;
import edu.drexel.trainsim.itinerary.search.ItinerarySearchEngine;

public class ItinerarySearchEngineImpl implements ItinerarySearchEngine {
    private OtpClient client;
    private Gson mapper;

    public ItinerarySearchEngineImpl(OtpClient client) {
        this.client = client;
        this.mapper = new Gson();
    }

    @Override
    public List<Itinerary> search(ItinerarySearch search) {
        // 1. Make the request to OTP
        var json = this.client.plan(search.getDepartDate(), search.getSource(), search.getTarget());

        // 2. Map the response JSON to our DTOs.
        var dto = this.mapper.fromJson(json, PlanResponseDto.class);

        // 3. Map the DTOs to our model objects.
        var itineraries = new ArrayList<Itinerary>();

        for (var itineraryDto : dto.getPlan().getItineraries()) {
            itineraries.add(new Itinerary(UUID.randomUUID(), createLegs(itineraryDto)));
        }

        return itineraries;
    }

    private static List<Leg> createLegs(ItineraryDto dto) {
        var legs = new ArrayList<Leg>();
        
        for(var legDto : dto.getLegs()) {
            legs.add(new Leg(UUID.randomUUID(), legDto.getRouteId(), createPlaces(legDto), legDto.getDistance()));
        }

        return legs;
    }

    private static List<Place> createPlaces(LegDto legDto) {
        var places = new ArrayList<Place>();
        var from = legDto.getFrom();
        places.add(new Place(UUID.randomUUID(), from.getStopId(), from.getArriveAt(), from.getDepartAt()));
        
        // for(var placeDto : legDto.getIntermediateStops()) {
        //     places.add(new PlaceImpl(placeDto));
        // }

        var to = legDto.getTo();
        places.add(new Place(UUID.randomUUID(), to.getStopId(), to.getArriveAt(), to.getDepartAt()));
        return places;
    }
}
