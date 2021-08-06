import operate from './operate'

const operations = ['+', '−', 'x', '÷', '%', 'AC', '=', '+/-', '.'];

const calculate = (data, buttonName) => {
    const { total, operations, next } = data;
    let totalGen;
    if (operations.include(buttonName)) {
        totalGen = operate(total, next, buttonName);
        return {totalGen, next, buttonName};
    }
    const newNext = buttonName;
    return {total, newNext, operation};
}

export default calculate;