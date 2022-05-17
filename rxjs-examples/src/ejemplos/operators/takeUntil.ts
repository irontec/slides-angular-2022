import { interval, fromEvent, takeUntil } from 'rxjs';

const source$ = interval(1000);
const clicks$ = fromEvent(document, 'click');
const result$ = source$.pipe(takeUntil(clicks$));
result$.subscribe(x => console.log(x));
// >> 0 // >> 1 // >> 2 // >> 3 ... hasta que hagamos click en el documento
