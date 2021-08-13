export default class Stop {
    private readonly _id: number;
    private readonly _otpId: string;
    private readonly _name: string;

    constructor(id: number, otpId: string, name: string) {
        this._id = id;
        this._otpId = otpId;
        this._name = name;
    }

    public get id(): number {
        return this._id;
    }

    public get otpId(): string {
        return this._otpId;
    }

    public get name(): string {
        return this._name;
    }
}