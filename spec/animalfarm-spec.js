import {
  AnimalFarm
} from './../src/animalfarm.js';

describe('AnimalFarm', function() {
  let fuzzy;

  beforeEach(function() {
    jasmine.clock().install();
    fuzzy = new AnimalFarm("Fuzzy");
    fuzzy.setHunger();
  });

  afterEach(function() {
    fuzzy = new AnimalFarm("Fuzzy");
    jasmine.clock().uninstall();
  });

  it('should have a name and a food level of 10 when it is created', function() {
    expect(fuzzy.name).toEqual("Fuzzy");
    expect(fuzzy.foodLevel).toEqual(10);
  });

  it('should have a name and a age level of 1 when it is created', function() {
    expect(fuzzy.name).toEqual("Fuzzy");
    expect(fuzzy.foodLevel).toEqual(10);
    expect(fuzzy.age).toEqual(1);
    expect(fuzzy.pottyLevel).toEqual(20);

  });

  it('should have a name and a age level of 1 when it is created', function() {
    // expect(fuzzy.name).toEqual("Fuzzy");
    // expect(fuzzy.foodLevel).toEqual(10);
    // expect(fuzzy.age).toEqual(1);
    // expect(fuzzy.pottyLevel).toEqual(20);
    expect(didYouPotty(pottyLevel)).toEqual(true);

});
});
