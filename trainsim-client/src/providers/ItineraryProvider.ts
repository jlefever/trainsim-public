import Itinerary from "../models/Itinerary";
import ItinerarySearch from "../models/ItinerarySearch";
import Leg from "../models/Leg";
import Place from "../models/Place";

export default class ItineraryProvider {
    fetchItineraries(search: ItinerarySearch, callback: (itineraries: readonly Itinerary[]) => void) {
        fetch("/api/query", { method: "POST", body: search.toJson() })
            .then(res => res.json())
            .then(res => res as ItineraryDto[])
            .then(res => res.map(fromItineraryDto))
            .then(res => callback(res));
    }
}

function fromItineraryDto(dto: ItineraryDto) {
    return new Itinerary(dto.id, dto.legs.map(l => fromLegDto(l)));
}

function fromLegDto(dto: LegDto) {
    const places = dto.places.map(p => fromPlaceDto(p));

    // Another way to do this would be to have a "WalkingLeg" and a "TransitLeg" class
    if (dto.routeId === undefined) {
        return Leg.walk(dto.id, dto.distance, places);
    }

    return Leg.transit(dto.id, dto.routeId, dto.distance, places);
}

function fromPlaceDto(dto: PlaceDto) {
    return new Place(dto.id, dto.stopId, new Date(dto.arriveAt), new Date(dto.departAt));
}

interface ItineraryDto
{
    id: string;
    legs: LegDto[];
}

interface LegDto
{
    id: string;
    routeId?: string;
    distance: number;
    places: PlaceDto[];
}

interface PlaceDto
{
    id: string;
    stopId: string;
    arriveAt: number;
    departAt: number;
}