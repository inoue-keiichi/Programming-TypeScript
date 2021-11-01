function call<T, U extends unknown[], R>(
    f: (arg: T, str: string, ...args: U) => R,
    arg: T,
    str: string,
    ...args: U
): R {
    return f(arg, str, ...args);
}

function fill(length: number, value: string): string[] {
    return Array.from({ length }, () => value);
}

console.log(call(fill, 10, 'a'));
// console.log(call(fill, 10, 1));  //エラー
