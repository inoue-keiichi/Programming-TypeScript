type Unit = 'EUR' | 'GBP' | 'JPY' | 'USD';

interface Currency {
    unit: Unit;
    value: number;
}

// eslint-disable-next-line @typescript-eslint/no-namespace
namespace Currency {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    export function from(value: number, unit: Unit): Currency {
        return {
            unit: unit,
            value: value,
        };
    }
}
