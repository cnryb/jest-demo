

test('test', () => {
  const mockBaseClass = jest.fn();
  jest.mock('../BaseClass', () => mockBaseClass);
  jest.mock('../BaseClass', () => {
    return function() {
      this.config = 'config'
      console.log('BaseClass constructor');
    }
  });
  // mockBaseClass= function() {
  //   this.config = 'config'
  //   console.log('BaseClass constructor');
  // }
  // mockBaseClass.mockImplementation(() => {
  //   return function() {
  //     this.config = 'config'
  //     console.log('BaseClass constructor');
  //   }
  // });

  const ChildClass = require('../ChildClass');
  const childClass = new ChildClass();
  childClass.childMethod();
  expect(childClass).toBeInstanceOf(ChildClass);
  // expect(mockBaseClass).toHaveBeenCalledTimes(1);
});