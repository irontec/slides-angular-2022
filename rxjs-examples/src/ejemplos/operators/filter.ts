import { of, pipe, filter } from "rxjs";

const obs$ = of(0, 1, 2, 3, 4);

obs$.pipe(
    filter(x => x%2===1)).subscribe(console.log);
// >> 1 // >> 3 //
