import {Observable} from 'rxjs';

const myObservable$ = Observable.create((observer) => {
    observer.next(Math.random()); // generamos un número aleatorio
});

// Subscripción 1
myObservable$.subscribe(data => {
  console.log(data); // 0.799234057357979
});

// Subscripción 2
myObservable$.subscribe(data => {
   console.log(data); //0.9293311109721503
});
// recibimos valores distintos en cada una de las subscripciones
