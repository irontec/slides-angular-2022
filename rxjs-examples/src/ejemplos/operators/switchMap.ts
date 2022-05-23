import { fromEvent, interval, take, switchMap } from 'rxjs';

const clicks = fromEvent(document, 'click');
const result = clicks.pipe(
  switchMap(ev => interval(1000).pipe(take(4)))
);
result.subscribe(x => console.log(x));
// Por cada click en el documento, se emitirán los valores del 0 al 3 a intervales de 1000ms. Si se vuelve a clicar, reinicia los valores

