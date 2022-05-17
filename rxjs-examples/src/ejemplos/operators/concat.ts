import {of, concat} from 'rxjs';

const obs1$ = of('a', 'b');

const obs2$ = of('x', 'y');

concat(obs1$, obs2$).subscribe(v=>console.log(v));
