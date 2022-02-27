type O = { a: { b: { c: string } } };

// eslint-disable-next-line @typescript-eslint/no-unused-vars
type i = keyof O; // i = "a"

// eslint-disable-next-line @typescript-eslint/no-unused-vars
type j = O['a']['b']; // { c: string }
