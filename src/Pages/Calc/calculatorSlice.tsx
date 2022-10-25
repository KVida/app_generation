import {createSlice} from '@reduxjs/toolkit';
import {calculationHandler} from "../../common/calculationHandler";
import {ArrNumberType, ArrOperationType, Operations} from "../../common/type";
import {PayloadAction} from "@reduxjs/toolkit/dist/createAction";

export interface CalcState {
    arrNumber: ArrNumberType,
    indexNumber: number,
    arrOperation: ArrOperationType,
    expression: string
}

const initialState: CalcState = {
    arrNumber: [],
    indexNumber: 0,
    arrOperation: [],
    expression: "0"
};

export interface stateApp {
    calculator: CalcState
}

export const calculatorSlice = createSlice({
    name: 'calculator',
    initialState,
    reducers: {
        btnClear: (state: CalcState) => {
            return {
                ...initialState
            };
        },
        btnEquals: (state: CalcState) => {
            if (state.indexNumber === 0) {
                return state;
            }

            console.log(state.arrOperation, state.arrNumber);
            let result = String(calculationHandler(state.arrOperation, state.arrNumber));

            return {
                ...state,
                expression: result
            };
        },

        operationCalc: (state: CalcState, action: PayloadAction<Operations>) => {
            let newArrNumber = [...state.arrNumber];
            let index = state.indexNumber;
            let newArrOperation = [...state.arrOperation];

            if ((newArrNumber.length - 1) === index) {
                newArrOperation[index] = action.payload;
                return {
                    ...state,
                    indexNumber: index + 1,
                    arrOperation: newArrOperation,
                    expression: `${state.expression}${action.payload}`
                };
            } else {
                newArrOperation[index - 1] = action.payload;
                return {
                    ...state,
                    indexNumber: index,
                    arrOperation: newArrOperation,
                    expression: `${state.expression.slice(0, -1)}${action.payload}`
                };
            }
        },

        inputNumber: (state: CalcState, action: PayloadAction<number>) => {
            let newArrNumber = [...state.arrNumber];

            if (newArrNumber[state.indexNumber] === undefined) {
                newArrNumber[state.indexNumber] = Number(action.payload);

                return {
                    ...state,
                    arrNumber: newArrNumber,
                    expression: (state.indexNumber === 0) ? `${newArrNumber[state.indexNumber]}` : `${state.expression}${action.payload}`
                }
            } else {
                newArrNumber[state.indexNumber] = parseInt(`${newArrNumber[state.indexNumber]}${action.payload}`);

                return {
                    ...state,
                    arrNumber: newArrNumber,
                    expression: `${state.expression}${action.payload}`
                }
            }
        }
    },
});

// Action creators are generated for each case reducer function
export const {inputNumber, btnClear, operationCalc, btnEquals} = calculatorSlice.actions;

export const selectNumber = (state: stateApp) => state.calculator;

export default calculatorSlice.reducer;