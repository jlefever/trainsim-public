export interface Itinerary
{
    id: string;
    legs: Leg[];
}

export interface Leg
{
    id: string;
    routeId?: string;
    distance: number;
    places: Place[];
}

export interface Place
{
    id: string;
    stopId: string;
    arriveAt: number;
    departAt: number;
}