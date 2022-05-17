import {BehaviorSubject} from 'rxjs';

const subject$ = new BehaviorSubject(5); //Valor de iniciación

// Subscripción 1
subject$.subscribe(data => {
console.log('Subscripción 1:', data);
});

subject$.next(1);
subject$.next(2);

// Subscripción 2
subject$.subscribe(data => {
console.log('Subscripción 2:', data);
});

subject$.next(3);
/*
Subscripción 1: 5
Subscripción 1: 1
Subscripción 1: 2
Subscripción 2: 2 La segunda subscripción recibe el último valor emitido
Subscripción 1: 3
Subscripción 2: 3
*/
