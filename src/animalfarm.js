export class AnimalFarm {
  constructor(name) {
    this.name = name;
    this.foodLevel = 10;
    this.age = 1;
    this.pottyLevel = 20;

  }
  setHunger() {
    setInterval(() => {
      this.foodLevel--;
    }, 1000);

  }

  setAge() {
    setInterval(() => {
      this.age--;
    }, 1);

  }

  setPotty() {
    setTimeout(() => {
      this.pottyLevel--;
    }, 20000);

  }

didYouPotty(pottyLevel) {
  if (this.pottyLevel < 80000) {
    return true
  } else {
    return false
  }
}
}
