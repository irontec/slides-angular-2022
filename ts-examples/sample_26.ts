//Indexable Type

interface City { label: string };
interface Cities {
    [index:string]: City;
    totalCities: label; // podemos añadir propiedades extra
};

const c1: City = {label: 'Bilbao'};
const c2: City = {label: 'Donosti'};

const cities: Cities = {
    'BI': c1,
    'SS': c2,
    totalCities: 2
};
