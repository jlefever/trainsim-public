export default interface TrainQuery {
    source: string;
    target: string;
    departDate: Date;
    returnDate: Date | null;
    travelers: number;
};