class car {
  constructor(mark, model, color, tachometer) {
    this.mark = mark;
    this.model = model;
    this.color = color;
    this.tachometer = tachometer;
  }

  get prop() {
    return `Car[mark= ${this.mark}, model= ${this.model}, color= ${this.color}, tachmeter= ${this.tachometer}]`;
  }
}

function main() {
  const carNew1 = new car("Volvo", "XC-60", "Black", "234 000");
  const carNew2 = new car("Mazda", "CX-S", "Green", "111 000");
  const carNew3 = new car("Dacia", "BIGGSTER", "Blue", "20 000");
  const car1 = carNew1.prop;
  const car2 = carNew2.prop;
  const car3 = carNew3.prop;

  console.log(car1);
  console.log(car2);
  console.log(car3);
}
main();

class racingCar extends car {
  constructor(mark, model, color, tachometer) {
    super(mark, model, color, tachometer);
  }

  participateInTheChampionship(position) {
    if (position > 0) {
      return `I won the ${position}th place!`;
    } else {
      return `I didn't win!`;
    }
  }
}
const racingCarData = new racingCar(`Toyota`, `Turbo`, `Red`, 10000);
console.log(racingCarData);
console.log(racingCarData.prop);
let resultChampionship = racingCarData.participateInTheChampionship;
console.log(resultChampionship(25));
