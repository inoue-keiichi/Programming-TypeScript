// eslint-disable-next-line @typescript-eslint/no-unused-vars
type Exclusive<T, U> = (T extends U ? never : T) | (U extends T ? never : U);

// type E = Exclusive<1 | 2, 2 | 4>
// 1. 条件を合併型全体に分配する
// type E = Exclusive<1, 2> | Exclusive<1, 4> | Exclusive<2, 2> | Exclusive<2, 4>
// 2. Exclusive の定義に置き換える
// type E = ((1 extends 2 ? never : 1) | (2 extends 1 ? never : 2))
//        | ((1 extends 4 ? never : 1) | (4 extends 1 ? never : 4))
//        | ((2 extends 2 ? never : 2) | (2 extends 2 ? never : 2))
//        | ((2 extends 4 ? never : 2) | (4 extends 2 ? never : 4))
// 3. 評価する
// type E = (1 | 2) | (1 | 4) | (never | never) | (2 | 4)
// 4. 単純化する
// type E =

// type E = Exclusive<1 | 2, 2 | 4>
// 1. Exclusive の定義に置き換える
//
// type E = ((1 | 2 extends 2 | 4 ? never : 1 | 2 ) | (2 | 4 extends 1 | 2 ? never : 2 | 4))
// 2. 分配する
// type E = (1 extends 2 | 4 ? never : 1)
//        | (2 extends 2 | 4 ? never : 2)
//        | (2 extends 1 | 2 ? never : 2)
//        | (4 extends 1 | 2 ? never : 4)
//
// 3. 評価する
// type E = 1 | never | 4
//
// 4. 単純化する
// type E = 1 | 4
