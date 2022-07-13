const PARKING_BLUEPRINT = [
  {
    pixel: 0,
    name: "",
    plateNumber: "",
    time: "",
    type: "",
    vacant: true,
  },
  {
    pixel: 1,
    name: "",
    plateNumber: "",
    time: "",
    type: "",
    vacant: true,
  },
  {
    pixel: 2,
    name: "",
    plateNumber: "",
    time: "",
    type: "",
    vacant: true,
  },
  {
    pixel: 3,
    name: "",
    plateNumber: "",
    time: "",
    type: "",
    vacant: true,
  },
  {
    pixel: 4,
    name: "",
    plateNumber: "",
    time: "",
    type: "",
    vacant: true,
  },
  {
    pixel: 5,
    name: "",
    plateNumber: "",
    time: "",
    type: "",
    vacant: true,
  },
  {
    pixel: 6,
    name: "",
    plateNumber: "",
    time: "",
    type: "",
    vacant: true,
  },
  {
    pixel: 7,
    name: "",
    plateNumber: "",
    time: "",
    type: "",
    vacant: true,
  },
  {
    pixel: 8,
    name: "",
    plateNumber: "",
    time: "",
    type: "",
    vacant: true,
  },
  {
    pixel: 9,
    name: "",
    plateNumber: "",
    time: "",
    type: "",
    vacant: true,
  },
  {
    pixel: 10,
    name: "",
    plateNumber: "",
    time: "",
    type: "",
    vacant: true,
  },
  {
    pixel: 11,
    name: "",
    plateNumber: "",
    time: "",
    type: "",
    vacant: true,
  },
];

const SMALL = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11"];
const MEDIUM = ["4", "5", "6", "7", "8", "9", "10", "11"];
const LARGE = ["8", "9", "10", "11"];

const getRandParkingId = (min, max) => Math.random() * (max - min) + min;

export { PARKING_BLUEPRINT, getRandParkingId, SMALL, MEDIUM, LARGE };
