// Fahrenheit (°F) = (Temperature in degrees Celsius (°C) * 9/5) + 32
const convertToCelsius = function(fahrenheit) {
  if (typeof fahrenheit !== 'number' || isNaN(fahrenheit)) {
    return "Error";
  }
  else {
    const celsius = (fahrenheit - 32) * (5/9);
    return(Math.round(celsius * 10) / 10);
  }
};

// Temperature in degrees Celsius (°C) = (Temperature in degrees Fahrenheit (°F) - 32) * 5/9.
const convertToFahrenheit = function(celsius) {
  if (typeof celsius !== 'number' || isNaN(celsius)) {
    return "Error";
  }
  else {
    const fahrenheit = celsius * (9/5) + 32;
    return(Math.round(fahrenheit * 10) / 10);  }
};

// npm test tempConversion.spec.js

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
