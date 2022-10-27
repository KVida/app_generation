import {ArrayNumberType, Operations} from "../../common/type";

export const DIGIT_COUNT: number = 10;
//export const NUMBERS = new Array(COUNT_NUMBERS).fill(0).map((_, index) => (index == 9) ? 0 : index+1);
export const DIGIT: ArrayNumberType = new Array(DIGIT_COUNT).fill(0).map((_, index) => (index == 9) ? 0 : index + 1);

export const OPERATIONS_CALC: Operations[] = [Operations.ADD, Operations.SUBTRACTION]; // operations[] -> OperationsArray