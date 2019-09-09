export class AnimalFarm {
  constructor(name) {
    this.name = name;
    this.foodLevel = 10;
    this.age = 1;
    this.pottyLevel = 20;
    this.medicine = 1;

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
    return this.age = 0;
  } else {
    return false
  }
}

didYouPottyagain() {
  if (this.pottyLevel < 80000 && this.medicine > 1) {
    return this.age = 0;
  } else {
    return false;
  }

}

 conditionToStay() {
   if (this.foodLevel > 10 && this.medicine > 1) {
     return this.age > 1;
   } else {
     return false;
   }
 }





}
