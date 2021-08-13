import Stop from "../models/Stop";

export class StopProvider {
    private stops?: readonly Stop[];

    fetchStops(callback: (stops: readonly Stop[]) => void) {
        if (this.stops) {
            callback(this.stops);
            return;
        }

        fetch("/api/stops")
            .then(res => res.json())
            .then(res => res as StopDto[])
            .then(res => res.map(dto => new Stop(dto.id, dto.otpId, dto.name)))
            .then(res => this.stops = res)
            .then(res => callback(res));
    }
}

interface StopDto {
    id: number;
    otpId: string;
    name: string;
};