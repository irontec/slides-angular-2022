function evaluate(mark: number): number|string {
    if (mark === 10) {
        return 'MATRICULA!';
    } else {
        return mark;
    }
}
let result = evaluate(10); // inferencia de tipo a number | string
result = 4; // OK
result = 'MAL'; // OK
