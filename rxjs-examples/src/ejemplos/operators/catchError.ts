import { of , map, catchError} from 'rxjs';

of('a', 'b', 4, 6, 7)
  .pipe(
    map(n => {
      if (n === 4) {
        throw 'four!';
      }
      return n;
    }),
    catchError(err => of('1', '2', '3'))
  )
  .subscribe(x => console.log(x));
  // a, b, 1, 2, 3
