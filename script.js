import "lodash-es";
import "core-js/stable";
import "regenerator-runtime/runtime";

class Person {
  constructor(name) {
    this.name = name;
  }
}

const ali = new Person("Samandar");

let arr = [1, 1, 2];

Array.find((val) => {
  return val == 2;
});
