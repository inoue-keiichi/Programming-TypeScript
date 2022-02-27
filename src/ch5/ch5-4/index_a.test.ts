import { RequestBuilder } from './index_a';

test('test1', () => {
    const builder: RequestBuilder = new RequestBuilder();
    expect(
        builder.setMethod('get').setURL('localhost://hoge.com').send()
    ).toEqual('method: get, url: localhost://hoge.com');
});
