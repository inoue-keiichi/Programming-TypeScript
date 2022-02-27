import { readFile } from 'fs';
import { promisify } from 'util';

const readFilePromise = promisify(readFile);
readFilePromise('.myfile.ts');

const myPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('foo');
    }, 300);
});

function <T> promisify(func: any): () => Promise<T> {
    return () =>
        new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve('foo');
            }, 300);
        });
}
