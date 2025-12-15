let language = "as";

let greet;
switch (language) {
  case "en":
    greet = "Hello!";
    break;
  case "de":
    greet = "Gutten tag!";
    break;
  case "ru":
    greet = "Привет!";
    break;
  default:
    greet = "Unknown this language";
}

console.log(greet);
