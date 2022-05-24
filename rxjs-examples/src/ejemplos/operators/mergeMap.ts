import { fromEvent, interval, take, switchMap, mergeMap } from 'rxjs';

const clicks = fromEvent(document, 'click');
const result = clicks.pipe(
  mergeMap(ev => interval(1000).pipe(take(6)))
);
result.subscribe(x => console.log(x));

