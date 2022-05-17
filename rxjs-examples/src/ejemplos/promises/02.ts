import { Observable } from "rxjs";

const numberPromise = new Promise((resolve) => {
    resolve(5);
    resolve(10);
});
numberPromise.then(value => console.log('numberPromise', value)); // >> 5

const numberObservable = new Observable((observer) => {
    observer.next(5);
    observer.next(10);
});
numberObservable.subscribe(value => console.log('numberObservable', value)); // >> 5 // >> 10
