import StopDto from "./Stop";

export default class ItinerarySearch {
    private readonly _source: StopDto;
    private readonly _target: StopDto;
    private readonly _departDate: Date;
    private readonly _returnDate: Date | null;
    private readonly _travelers: number;

    private constructor(source: StopDto, target: StopDto, departDate: Date,
        returnDate: Date | null, travelers: number) {
        this._source = source;
        this._target = target;
        this._departDate = departDate;
        this._returnDate = returnDate;
        this._travelers = travelers;

        this.toJson = this.toJson.bind(this);
    }

    public static oneWay(source: StopDto, target: StopDto, departDate: Date,
        travelers: number): ItinerarySearch {
        return new ItinerarySearch(source, target, departDate, null, travelers);
    }

    public static roundTrip(source: StopDto, target: StopDto, departDate: Date,
        returnDate: Date, travelers: number): ItinerarySearch {
        return new ItinerarySearch(source, target, departDate, returnDate, travelers);
    }

    public get source(): StopDto {
        return this._source;
    }

    public get target(): StopDto {
        return this._target;
    }

    public get departDate(): Date {
        return this._departDate;
    }

    public get returnDate(): Date | null {
        return this._returnDate;
    }

    public get travelers(): number {
        return this._travelers;
    }

    public toJson() {
        const { source, target, departDate, returnDate, travelers } = this;
        
        return JSON.stringify({
            source: source.otpId, target: target.otpId, departDate, returnDate, travelers
        });
    }
}