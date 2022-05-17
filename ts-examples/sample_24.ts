interface Point {
    readonly coordX: number;
    readonly coordY: number;
    label: string;
};

const c:Point = {coordX: 43.2603479, coordY: -2.9334110, label: 'Bilbao'};
c.coordX = 44.2603479; // COMPILATION ERROR!!
