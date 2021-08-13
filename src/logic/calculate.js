import operate from './operate';

const calculate = (obj, buttonName) => {
  const { next, operation, total } = obj;
  let cloneObj = { ...obj }; // Added to avoid changing the original object
  const operators = ['+', 'X', 'x', '-', '/'];
  const digits = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
  // console.log(buttonName);

  switch (true) {
    case buttonName === 'AC':
      cloneObj.total = 0;
      cloneObj.next = 0;
      cloneObj.operation = null;
      break;
    case buttonName === '.':
      if (next) {
        if (next.includes('.')) {
          cloneObj = {};
        } else {
          cloneObj.next = `${next}.`;
        }
      }
      if (operation) cloneObj.next = '0.';
      if (total) {
        if (total.includes('.')) {
          cloneObj = {};
        } else {
          cloneObj.total = `${total}.`;
        }
      } else {
        cloneObj.total = '0.';
      }
      break;
    case buttonName === '+/-':
      cloneObj.total = (total * (-1)).toString();
      cloneObj.next = (next * (-1)).toString();
      break;
    case buttonName === '%':
      cloneObj.next = (0.01 * total).toString();
      cloneObj.operation = '%';
      break;
    case buttonName === '=':
      if (total && next && operation) {
        cloneObj.total = operate(total, next, operation);
        cloneObj.next = null;
        cloneObj.operation = null;
      }
      break;
    case operators.includes(buttonName):
      cloneObj.operation = buttonName;
      break;
    case operation && digits.includes(buttonName):
      cloneObj.next = next ? next + buttonName : buttonName;
      break;
    case digits.includes(buttonName):
      cloneObj.total = total ? total + buttonName : buttonName;
      break;
    default:
      return null;
  }
  return cloneObj;
};

export default calculate;
