let positionLat = 10;
let positionLong = 20;

let addressLat = 15;
let addressLong = 25;

let deltaLat = addressLat - positionLat;
let deltaLong = addressLong - positionLong;

let distance = Math.sqrt(deltaLat ** 2 + deltaLong ** 2);

console.log(distance);
