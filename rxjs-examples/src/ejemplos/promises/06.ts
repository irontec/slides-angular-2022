import { Observable } from "rxjs";

const obs$ = new Observable((observer) => {
    setTimeout(()=>observer.next(), 1000);
  });

  obs$.subscribe(()=>console.log("uno")); // >> uno // T0 + 1000ms

  setTimeout(() => {
    // se genera el callback en T0+500ms
  obs$.subscribe(()=>console.log("dos")) // >> dos // T0 + 1500ms
  }, 500);
