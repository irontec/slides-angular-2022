import { fromEvent, interval, concatMap, take } from 'rxjs';

const clicks = fromEvent(document, 'click');
const result = clicks.pipe(
  concatMap(ev => interval(1000).pipe(take(4)))
);
result.subscribe(x => console.log(x));
// Por cada click en el documento, se emitirán los valores del 0 al 3 a intervales de 1000ms
