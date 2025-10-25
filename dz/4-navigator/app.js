let positionLat;
let positionLong;

let deltaLat = destinationLat - positionLat;
let deltaLong = destinationLon - positionLong;

let distance = Math.sqrt(deltaLat ** 2 + deltaLong ** 2);

console.log(distance);
