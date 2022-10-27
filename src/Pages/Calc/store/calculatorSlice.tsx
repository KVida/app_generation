import {createSlice} from '@reduxjs/toolkit';
import {calculationHandler} from "../calculationHandler";
import {ArrayNumberType, ArrOperationType, Operations} from "../../../common/type";
import {PayloadAction} from "@reduxjs/toolkit/dist/createAction";

export interface CalculationState {
    arrayNumber: ArrayNumberType,
    indexNumber: number,
    arrayOperation: ArrOperationType,
    expression: string
}

const initialState: CalculationState = {
    arrayNumber: [],
    indexNumber: 0,
    arrayOperation: [],
    expression: "0"
};

export interface stateApp { // RootState
    calculator: CalculationState
}

export const calculatorSlice = createSlice({
    name: 'calculator',
    initialState,
    reducers: {
        clear: (state: CalculationState) => {
            return {
                ...initialState
            };
        },
        expressionSolution: (state: CalculationState) => {
            if (state.indexNumber === 0) {
                return state;
            }

            let expression = String(calculationHandler(state.arrayOperation, state.arrayNumber));

            return {
                ...state,
                expression
            };
        },

        inputOperation: (state: CalculationState, action: PayloadAction<Operations>) => {
            let newArrayNumber = [...state.arrayNumber];
            let index = state.indexNumber;
            let newArrayOperation = [...state.arrayOperation];

            if ((newArrayNumber.length - 1) === index) {
                newArrayOperation[index] = action.payload;
                return {
                    ...state,
                    indexNumber: index + 1,
                    arrayOperation: newArrayOperation,
                    expression: `${state.expression}${action.payload}`
                };
            } else {
                newArrayOperation[index - 1] = action.payload;
                return {
                    ...state,
                    indexNumber: index,
                    arrayOperation: newArrayOperation,
                    expression: `${state.expression.slice(0, -1)}${action.payload}`
                };
            }
        },

        inputNumber: (state: CalculationState, action: PayloadAction<number>) => {
            let newArrayNumber = [...state.arrayNumber];

            if (newArrayNumber[state.indexNumber] === undefined) {
                newArrayNumber[state.indexNumber] = Number(action.payload);

                return {
                    ...state,
                    arrayNumber: newArrayNumber,
                    expression: (state.indexNumber === 0) ? `${newArrayNumber[state.indexNumber]}` : `${state.expression}${action.payload}`
                }
            } else {
                newArrayNumber[state.indexNumber] = parseInt(`${newArrayNumber[state.indexNumber]}${action.payload}`);

                return {
                    ...state,
                    arrayNumber: newArrayNumber,
                    expression: `${state.expression}${action.payload}`
                }
            }
        }
    },
});

// Action creators are generated for each case reducer function
export const {inputNumber, inputOperation, clear, expressionSolution} = calculatorSlice.actions;

export const selectExpression = (state: stateApp) => state.calculator.expression;
export const selectCalculatorStore = (state: stateApp) => state.calculator;

export default calculatorSlice.reducer;