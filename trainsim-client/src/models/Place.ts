export default class Place {
    private readonly _id: string;
    private readonly _stopId: string;
    private readonly _arriveAt: Date;
    private readonly _departAt: Date;

    constructor(id: string, stopId: string, arriveAt: Date, departAt: Date) {
        this._id = id;
        this._stopId = stopId;
        this._arriveAt = arriveAt;
        this._departAt = departAt;
    }

    public get id(): string {
        return this._id;
    }

    public get stopId(): string {
        return this._stopId;
    }

    public get arriveAt(): Date {
        return this._arriveAt;
    }
    
    public get departAt(): Date {
        return this._departAt;
    }
}