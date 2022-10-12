const BaseClass = require('./BaseClass')

class ChildClass extends BaseClass {
  constructor() {
    super()
    console.log('ChildClass constructor');
  }

  childMethod() {
    console.log(this.config);
    console.log('ChildClass childMethod');
  }
}

module.exports = ChildClass
