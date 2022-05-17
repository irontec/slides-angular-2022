/* ###### Typescript - Functions

## Overload
 */

let currentVolumen = 50;
const levels = { 'high': 100, 'medium': 50, 'low': 10};
function changeVolumen(x:any): any {

    if (typeof x === "string") {
        return currentVolumen-levels[x];
    }

    else if (typeof x == "number") {
        return currentVolumen-x;
    }
}
