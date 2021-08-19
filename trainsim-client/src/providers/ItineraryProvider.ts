import Itinerary from "../models/Itinerary";
import ItinerarySearch from "../models/ItinerarySearch";
import Leg from "../models/Leg";
import Place from "../models/Place";
import SearchResult from "../models/SearchResult";

export default class ItineraryProvider {
    fetchItineraries(search: ItinerarySearch, callback: (itineraries: SearchResult) => void) {
        fetch("/api/query", { method: "POST", body: search.toJson() })
            .then(res => res.json())
            .then(res => res as SearchResultDto)
            .then(res => fromSearchResultDto(res))
            .then(res => callback(res));
    }
}

function fromSearchResultDto(dto: SearchResultDto) {
    return new SearchResult(dto.outboundItineraries.map(i => fromItineraryDto(i)), dto.returnItineraries.map(i => fromItineraryDto(i)));
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

interface SearchResultDto {
    outboundItineraries: ItineraryDto[];
    returnItineraries: ItineraryDto[];
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