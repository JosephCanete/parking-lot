const calculateRates = (typeOfCar, totalHour) => {
  if (typeOfCar === "SP") return totalHour * 20;
  if (typeOfCar === "MP") return totalHour * 60;
  if (typeOfCar === "LP") return totalHour * 100;
};

export { calculateRates };
