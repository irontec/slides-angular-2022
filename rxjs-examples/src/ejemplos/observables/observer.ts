import { Observer, of } from 'rxjs';

const obs$ = of([1,2,3,4,5,6],2,3,4,5);

const observer: Observer<any> = {
    next : value => console.log('siguiente [next]:', value ),
    error: error => console.warn('error [obs]:', error ),
    complete: () => console.info('completado [obs]')
};

obs$.subscribe( observer );
