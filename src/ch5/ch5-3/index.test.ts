import { BalletFlat, Boot, Shoe, Sneaker } from '.';

test('test1', () => {
    const actual: BalletFlat = Shoe.create('balletFlat');
    expect(actual).toEqual({ purpose: 'dancing' });
});

test('test2', () => {
    const actual: Boot = Shoe.create('boot');
    expect(actual).toEqual({ purpose: 'woodcutting' });
});

test('test3', () => {
    const actual: Sneaker = Shoe.create('sneaker');
    expect(actual).toEqual({ purpose: 'walking' });
});
