/* ###### Typescript - Advanced Types

## Type Assertion (Aserciones de tipo) */

function calculate(a:any) {
    return (<string>a).length; // En el tsconfig, JSX debe estar a none.
}
calculate("hola mundo");

function calculating(a:any) {
     return (a as string).length;
}
calculating("hola mundo");
