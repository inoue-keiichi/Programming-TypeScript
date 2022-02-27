type Shoe = {
    purpose: string;
};

export class BalletFlat implements Shoe {
    purpose = 'dancing';
}

export class Boot implements Shoe {
    purpose = 'woodcutting';
}

export class Sneaker implements Shoe {
    purpose = 'walking';
}

type CreateShoe = {
    (type: 'balletFlat'): BalletFlat;
    (type: 'boot'): Boot;
    (type: 'sneaker'): Sneaker;
};

interface ShoeFactory {
    create: CreateShoe;
}

export const Shoe: ShoeFactory = {
    create: (type: 'balletFlat' | 'boot' | 'sneaker') => {
        switch (type) {
            case 'balletFlat':
                return new BalletFlat();
            case 'boot':
                return new Boot();
            case 'sneaker':
                return new Sneaker();
        }
    },
};
