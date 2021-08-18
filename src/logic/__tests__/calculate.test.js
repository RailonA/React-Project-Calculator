import '@testing-library/jest-dom/extend-expect';
import calculate from '../calculate';

const myState = {
  total: null,
  next: null,
  operation: null,
};

const resetState = () => {
  myState.total = null;
  myState.next = null;
  myState.operation = null;
};

it('Should return the the string 4 as the next propertie ', () => {
  myState.total = '4';
  myState.operation = '+';
  const myResult = calculate(myState, '4');
  expect(myResult.next).toEqual('4');
});

it('Should not return the the string 5 as the next propertie ', () => {
  myState.total = '4';
  myState.operation = '+';
  const myResult = calculate(myState, '4');
  expect(myResult.next).not.toBe('5');
});

it('Should return the the string 8 as the total propertie ', () => {
  myState.total = '4';
  myState.next = '4';
  myState.operation = '+';
  const myResult = calculate(myState, '=');
  expect(myResult.total).toEqual('8');
});

it('Should not return the the string 9 as the total propertie ', () => {
  myState.total = '4';
  myState.next = '4';
  myState.operation = '+';
  const myResult = calculate(myState, '=');
  expect(myResult.total).not.toBe('9');
});

it('Should return the string 4 as the total propertie ', () => {
  const myResult = calculate(myState, '4');
  expect(myResult.total).toEqual('4');
});

it('Should return the string + as the operation propertie ', () => {
  myState.total = '4';
  const myResult = calculate(myState, '+');
  expect(myResult.operation).toEqual('+');
});

it('Should return the string -4 as the next propertie ', () => {
  myState.total = '4';
  myState.next = '4';
  const myResult = calculate(myState, '+/-');
  expect(myResult.next).toEqual(-4);
});

it('Should return the string -4 as the total propertie ', () => {
  myState.total = '4';
  myState.next = '4';
  const myResult = calculate(myState, '+/-');
  expect(myResult.total).toEqual(-4);
});

it('Should return the string - as the operation propertie ', () => {
  resetState();
  let myResult = calculate(myState, '4');
  myResult = calculate(myState, '-');
  expect(myResult.operation).toEqual('-');
});

it('Should return the string ÷ as the operation propertie ', () => {
  resetState();
  let myResult = calculate(myState, '4');
  myResult = calculate(myState, '÷');
  expect(myResult.operation).toEqual('÷');
});

it('Should return the the string 8 as the total propertie ', () => {
  myState.total = '12';
  myState.next = '4';
  myState.operation = '-';
  const myResult = calculate(myState, '=');
  expect(myResult.total).toEqual('8');
});

it('Should return the the string 4 as the total propertie ', () => {
  myState.total = '2';
  myState.next = '2';
  myState.operation = '+';
  const myResult = calculate(myState, '=');
  expect(myResult.total).toEqual('4');
});

it('Should return the the string 2 as the total propertie ', () => {
  myState.total = '6';
  myState.next = '4';
  myState.operation = '-';
  const myResult = calculate(myState, '=');
  expect(myResult.total).toEqual('2');
});

it('Should return the the string 4 as the total propertie ', () => {
  myState.total = '6';
  myState.next = '2';
  myState.operation = '÷';
  const myResult = calculate(myState, '=');
  expect(myResult.total).toEqual('3');
});
