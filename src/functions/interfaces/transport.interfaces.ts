export interface ITransport {
    time: string;
    date: string;
}

export interface ICreateData {
    transportId: string;
    date: string;
    time: string;
    route: string;
    seats: number;
    delete: boolean;
    reservations?:IReservation[]
}

export interface IReservation{
    reservationId:string;
    delete:boolean;
}