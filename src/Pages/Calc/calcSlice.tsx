import {createSlice} from '@reduxjs/toolkit';

export interface CalcState {
    fullNumber: string,
    firstNumber: number,
    operation: string,
    secondNumber: number,
}

const initialState: CalcState = {
    fullNumber: "0",
    firstNumber: 0,
    operation: "",
    secondNumber: 0,
};

export interface stateApp {
    calc: CalcState
}

export const calcSlice = createSlice({
    name: 'calc',
    initialState,
    reducers: {
        btnClear: (state: CalcState) => {
            return {
                ...initialState
            };
        },
        btnEquals: (state: CalcState) => {
            let firstNumberEl = Number(state.firstNumber),
                secondNumberEl = Number(state.fullNumber),
                operationEl = state.operation,
                resultEl = parseInt(firstNumberEl + operationEl + secondNumberEl)
            ;
            //console.log(resultEl);
           // console.log(state.fullNumber, state.firstNumber, state.operation, state.secondNumber);

            return {
                ...state,
                secondNumber: Number(state.fullNumber),
                fullNumber: String(resultEl)
            };
        },
        operationCalc: (state: CalcState, action: any) => {
            if (state.operation == '') {
                return {
                    ...state,
                    firstNumber: Number(state.fullNumber),
                    fullNumber: "0",
                    operation: action.payload

                };
            } else {
                return {...state}
            }
        },

        inputNumber: (state: CalcState, action: any) => {
            if (state.fullNumber === "0") {
                return {
                    ...state,
                    fullNumber: action.payload
                };
            } else {
               return {
                    ...state,
                    fullNumber: state.fullNumber + action.payload
                };
            }

        }
    },
});

// Action creators are generated for each case reducer function
export const {inputNumber, btnClear, operationCalc, btnEquals} = calcSlice.actions;

export const selectNumber = (state: stateApp) => state.calc.fullNumber;

export default calcSlice.reducer