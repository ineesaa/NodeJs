class Car {
    constructor(brand, model, year){
      this.brand = brand;
      this.model = model;
      this.year = year;
    }
    getInfo(){
      return `${this.brand} ${this.model} (${this.year})`;
    }
    drive(){
      console.log(`${this.brand} ${this.model} is driving.`);
    }
  }
  module.exports = Car;
  