import {fromEvent} from 'rxjs';

const myObservable$ = fromEvent(document, 'click'); // Escuchamos el evento click

// Subscripción 1
myObservable$.subscribe(e => {
console.log(e['clientX']); // 408
});

// Subscripción 2
myObservable$.subscribe(e => {
console.log(e['clientX']); // 408
});
