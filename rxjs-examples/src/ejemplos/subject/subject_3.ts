import {Subject} from 'rxjs';

const subject$ = new Subject();// creamos nuestro subject

// Subscripción 1 al Subject que es un Observable
subject$.subscribe((data) => {
console.log(data); // 0.799234057357979
});

// Subscripción 2 al Subject que es un Observable
subject$.subscribe((data) => {
console.log(data); // 0.799234057357979
});

subject$.next(Math.random());// El subject usa el método next para emitir valores ya que también es un Observer.
