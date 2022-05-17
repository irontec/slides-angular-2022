import { interval , tap, map, take, share} from 'rxjs';

const source$ = interval(1000).pipe(
  tap(x => console.log('Processing: ', x)),
  map(x => x * x),
  take(6),
  share()
);

source$.subscribe(x => console.log('subscription 1: ', x));
source$.subscribe(x => console.log('subscription 2: ', x));
