const reserve: Reserve = (
    fromroDestination: Date | string,
    toOrDestination?: Date | string,
    destination?: string
) => {
    if (toOrDestination instanceof Date && destination !== undefined) {
        return 'Syukuhaku';
    } else if (typeof toOrDestination === 'string') {
        return 'Higaeri';
    } else if (typeof fromroDestination === 'string') {
        return 'SuguSyuppatsu';
    } else {
        throw Error('');
    }
};

console.log(
    reserve(new Date(), new Date(), 'Okinawa') +
        ": reserve(new Date(), new Date(), 'Okinawa')"
);
console.log(
    reserve(new Date(), 'Okinawa') + ": reserve(new Date(), 'Okinawa')"
);
console.log(reserve('Okinawa') + ": reserve('Okinawa')");

type Reserve = {
    (from: Date, to: Date, destination: string): Reservation;
    (from: Date, destination: string): Reservation;
    (destination: string): Reservation;
};

type Reservation = 'Higaeri' | 'Syukuhaku' | 'SuguSyuppatsu';
