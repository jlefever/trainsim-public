import Place from "./Place";

export default class Leg {
    private readonly _id: string;
    private readonly _routeId?: string | undefined;
    private readonly _distance: number;
    private readonly _places: readonly Place[];

    private constructor(id: string, routeId: string | undefined, distance: number,
        places: readonly Place[]) {
        this._id = id;
        this._routeId = routeId;
        this._distance = distance;
        this._places = places
    }

    public static walk(id: string, distance: number, places: readonly Place[]) {
        return new Leg(id, undefined, distance, places);
    }

    public static transit(id: string, routeId: string, distance: number,
        places: readonly Place[]) {
        return new Leg(id, routeId, distance, places);
    }

    public get id(): string {
        return this._id;
    }

    public get isWalking(): boolean {
        return this._routeId === undefined;
    }

    public get routeId(): string | undefined {
        return this._routeId;
    }

    public get distance(): number {
        return this._distance;
    }

    public get places(): readonly Place[] {
        return this._places;
    }
}