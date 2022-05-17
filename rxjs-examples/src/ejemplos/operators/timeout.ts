import { pipe, interval, timeout } from 'rxjs';

const source$ = interval(5000).pipe(
    timeout(4000)
  ).subscribe(
      (v) => console.log(v),
      (err)=>console.log("ERROR!", err) // Como el tiempo de _interval_ es mayor que el de _timeout_ >> ERROR! Timeout
  );
