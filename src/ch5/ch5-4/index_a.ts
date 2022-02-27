export class RequestBuilder {
    private method: 'get' | 'post' | null = null;
    private url: string | null = null;

    setMethod(method: 'get' | 'post'): { setURL: (url: string) => Additional } {
        this.method = method;
        return {
            setURL: (url: string) => {
                this.url = url;
                return new Additional(this.method as 'get' | 'post', this.url);
            },
        };
    }
}

class Additional {
    private method: 'get' | 'post';
    private url: string;
    private data: object | null = null;

    constructor(method: 'get' | 'post', url: string) {
        this.method = method;
        this.url = url;
    }

    setData(data: object): this {
        this.data = data;
        return this;
    }
    send(): string {
        let str = 'method: ' + this.method;
        str = str + ', url: ' + this.url;
        return str;
    }
}

const hoge: RequestBuilder = new RequestBuilder();
hoge.setMethod('get').setURL('');
