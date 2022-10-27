import {ArrayNumberType, ArrOperationType, Operations} from "../../common/type";

type OperationsHandler = (a: number, b: number) => number;

export const add: OperationsHandler = (a, b) => {
    return a + b;
};

export const subtraction: OperationsHandler = (a, b) => {
    return a - b;
};

export const operationMap: Record<Operations, OperationsHandler> = {
    [Operations.ADD]: add,
    [Operations.SUBTRACTION]: subtraction,
};

export const calculationHandler = (operations: ArrOperationType, arrayNumber: ArrayNumberType) => {
    let firstNumber = Number(arrayNumber[0]);
    let secondNumber;

    arrayNumber.forEach(( value,  index) =>{
       if (index > 0) {
           secondNumber = Number(value);

           firstNumber = operationMap[operations[index-1]](firstNumber, secondNumber);
       }
    });

    return firstNumber;
};