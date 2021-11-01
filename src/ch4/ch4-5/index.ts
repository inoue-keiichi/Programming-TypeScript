export function is<T>(arg1: T, arg2: T, ...arg3: T[]) {
    if (!Array.isArray(arg1)) {
        return arg1 === arg2 && arg3.every((t) => t === arg1);
    }
    return arrayEqual(arg1, arg2) && arg3.every((t) => arrayEqual(t, arg1));
}

function arrayEqual<T>(a: T, b: T) {
    if (!Array.isArray(a)) return false;
    if (!Array.isArray(b)) return false;
    if (a.length != b.length) return false;
    for (let i = 0, n = a.length; i < n; ++i) {
        if (a[i] !== b[i]) return false;
    }
    return true;
}
