import {ArrNumberType, ArrOperationType, Operations} from "./type";


export const add = (a: number, b: number) => {
    return a + b;
};

export const subtraction = (a: number, b: number) => {
    return a - b;
};

export const operationMap: Record<Operations, (a: number, b: number) => number> = {
    '+': add,
    '-': subtraction,
};


export const calculationHandler = (operations: ArrOperationType, arrNumber: ArrNumberType) => {
    let firstNumber = Number(arrNumber[0]);
    let secondNumber;
    arrNumber.forEach(( value,  index) =>{
       if (index > 0) {
           secondNumber = Number(value);

           firstNumber = operationMap[operations[index-1]](firstNumber, secondNumber);
       }
    });

    return firstNumber;
};