const sumCash = 1000;
const currency = "руб";
const targetСurrency = "€";

let conversionRateDollar = 80.98;
let conversionRateEuro = 93.38;

const currencyConversion = (sumCash, currency, targetСurrency) => {
  if (currency === "руб" && targetСurrency === "$") {
    return sumCash / conversionRateDollar;
  } else if (currency === "руб" && targetСurrency === "€") {
    return sumCash / conversionRateEuro;
  }
  return null;
};

console.log(currencyConversion(sumCash, currency, targetСurrency));
