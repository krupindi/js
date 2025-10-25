let positionLat;
let positionLon;

let addressLat;
let addressLon;

let deltaLat = addressLat - positionLat;
let deltaLong = addressLon - positionLon;

let distance = Math.sqrt(deltaLat ** 2 + deltaLong ** 2);

console.log(distance);
