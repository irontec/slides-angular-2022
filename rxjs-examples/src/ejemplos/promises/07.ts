import { Observable, pipe, share } from "rxjs";

const obs$ = new Observable((observer) => {
    setTimeout(()=>observer.next(1), 1000);
  }).pipe(share()); // <- Usamos el operador multicast **share**

  obs$.subscribe(value=>console.log("uno", value)); // uno 1 - T0 + 1000ms

  setTimeout(() => {
    // se genera el callback en T0+500ms
  obs$.subscribe(value=>console.log("dos", value)) // dos 1 - T0 + **1000ms**
  }, 500);
