interface Point {
    coordX: number;
    coordY: number;
    label: string;
    description?: string;
};

const c:Point = {
    coordX: 43.2603479,
    coordY: -2.9334110,
    label: 'Bilbao'
};
console.log(c.description === undefined); //true
