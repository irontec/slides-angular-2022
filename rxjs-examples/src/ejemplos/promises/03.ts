import { Observable } from "rxjs";

const numberPromise = new Promise((resolve) => {
    console.log('numberPromise', "hola!")
    resolve(5);
 });
 // hola! // **aun no existe un .then()**

 const numberObservable = new Observable((observer) => {
    console.log('numberObservable', "hola");
    observer.next(5);
});
// 🦗 🦗 🦗 (cri, cri, cri)
