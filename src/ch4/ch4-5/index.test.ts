import { is } from './index';

test('test1', () => {
    expect(is('string', 'otherstring')).toBeFalsy();
});

test('test2', () => {
    expect(is(true, false)).toBeFalsy();
});

test('test3', () => {
    expect(is(42, 42)).toBeTruthy();
});

test('test4', () => {
    expect(is([1], [1, 2], [1, 2, 3])).toBeFalsy();
});

test('test5', () => {
    expect(is([1, 2], [1, 2], [1, 2])).toBeTruthy();
});

test('test6', () => {
    expect(is(10, 10, 10)).toBeTruthy();
});
