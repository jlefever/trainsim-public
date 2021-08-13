import dayjs from "dayjs";
import Leg from "./Leg";
import Place from "./Place";

export default class Itinerary {
    private readonly _id: string;
    private readonly _legs: readonly Leg[];

    constructor(id: string, legs: readonly Leg[]) {
        this._id = id;
        this._legs = legs;
    }

    public get id(): string {
        return this._id;
    }
    
    public get legs(): readonly Leg[] {
        return this._legs;
    }

    public get start(): Place {
        return this.legs[0].places[0];
    }

    public get startDate(): Date {
        return this.start.departAt;
    }

    public get end(): Place {
        const places = this.legs[this.legs.length - 1].places;
        return places[places.length - 1];
    }

    public get endDate(): Date {
        return this.end.arriveAt;
    }

    public get numTransitLegs(): number {
        return this.legs.filter(l => l.routeId).length;
    }

    public get numTransfers(): number {
        return this.numTransitLegs - 1;
    }

    public get duration(): number {
        return dayjs(this.endDate).diff(this.startDate);
    }
}