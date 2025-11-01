hasLicence = true;
age = 18;
isDrunk = false;

const canDrive = hasLicence && age >= 18 && !isDrunk ? "может" : "не может";

console.log(canDrive);
