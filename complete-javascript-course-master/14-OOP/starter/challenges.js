// CHALLENGE: 1
const Car = function (make, speed) {
  this.make = make;
  this.speed = speed;
}

Car.prototype.accelerate = this.accelerate = function () {
  this.speed += 10;
  console.log(`${this.make} is going at ${this.speed}km/h`);
}

Car.prototype.brake = this.brake = function () {
  this.speed -= 5;
  console.log(`${this.make} is going at ${this.speed}km/h`);
}

const BMW = new Car("BMW", 120);
const mercedes = new Car("Mercedes", 95);

/* BMW.brake();
mercedes.accelerate(); */

// CHALLENGE: 2
class CarCL {
  constructor(make, speed) {
    this.make = make;
    this.speed = speed;
  }

  accelerate() {
    this.speed += 10;
    console.log(`${this.make} is going at ${this.speed}km/h`);
  }

  brake() {
    this.speed -= 5;
    console.log(`${this.make} is going at ${this.speed}km/h`);
  }

  get speedUS() {
    return this.speed / 1.6;
  }

  set speedUS(speed) {
    this.speed = speed * 1.6;
  }
}

const ford = new CarCL("Ford", 120);

/*console.log(ford.speedUS);
ford.speedUS = 100;
console.log(ford.speedUS);*/

// CHALLENGE: 3
const EV = function (make, speed, charge) {
  Car.call(this, make, speed);
  this.charge = charge;
}

EV.prototype = Object.create(Car.prototype);
EV.prototype.constructor = Car;

EV.prototype.chargeBattery = function (chargeTo) {
  this.charge = chargeTo;
}

EV.prototype.accelerate = function () {
  this.speed += 20;
  this.charge --;
  console.log(`${this.make} going at ${this.speed}km/h, with a charge of ${this.charge}%`);
}

const tesla = new EV("Tesla", 120, 23);
/* console.log(tesla);
tesla.chargeBattery(90);
tesla.accelerate(); */

// CHALLENGE: 4
