console.log("Ex1")

const car = {
    brand: "Volkswagen",
    model: "4MOT DSG",
    year: 2021,
    price: 30.981,
    kmBord: 11.454,
}
console.log(car);

car.kmBord = 10.563;
console.log("Noul kilometraj este:", car.kmBord);

car.description = " Tractiune Integrala";
console.log("Proprietatea noua este:", car.description)

delete car.description;
console.log("Proprietatea noua este:", car.description)

/*function createOrDeleteProp (car){
if (car.description !== undefined) {
    console.log("Brandul are", car.description);
} else {
    console.log("Brandul", car.brand, "nu are Tractiune integrala");
}
}
createOrDeleteProp(car)*/

function createOrDeleteProp(key, value) {
    if (value !== undefined) {
        car[key] = value
    } else {
        delete car[key]
    }
}

createOrDeleteProp("description", "Suv, Negru");
console.log("Descriere:", car.description);

createOrDeleteProp("description", undefined);
console.log("Descriere:", car.description);
createOrDeleteProp("description");
console.log("Descriere:", car.description);


console.log("Ex2")

function tuneCar (car) {
    const car2 = { ...car};
    car2.kmBord = car.kmBord / 2;
    car2.price = car.price * 1.5;

    return car2
}

const tunecar2 = tuneCar(car);
console.log("Aceeasi masina?: ", tunecar2 === car);
console.log("Noua masina:", tunecar2);

console.log("ex3"); 

function hourMinSec(date) {
    const minutes = date.getMinutes();
    if (minutes < 10) {
        return "0" + minutes;
    }
    return minutes;
}

const today = new Date();
const formatedDate = today.getHours() + ":" + hourMinSec(today) + ":" + today.getSeconds()
console.log("Este ora", formatedDate)

