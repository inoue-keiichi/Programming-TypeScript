class Index {
    private hoge: string;

    protected constructor(hoge: string) {
        this.hoge = hoge;
    }
}

// new Index('aaa'); // エラー

class Child extends Index {
    // エラーじゃない
    index = new Index('aaa');
    constructor(hoge: string) {
        super(hoge);
    }
}

new Child('aaa');
