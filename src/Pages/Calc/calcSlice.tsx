import { createSlice } from '@reduxjs/toolkit';

export interface CalcState {
    fullNumber: string,
    firstNumber: number,
    operation: string,
    secondNumber: number,
    result: number
}

const initialState: CalcState = {
    fullNumber: "0",
    firstNumber: 0,
    operation: '',
    secondNumber: 0,
    result: 0
};

export interface stateApp {
    calc:CalcState
}

export const calcSlice = createSlice({
    name: 'calc',
    initialState,
    reducers: {
   /*     increment: (state) => {
            // Redux Toolkit allows us to write "mutating" logic in reducers. It
            // doesn't actually mutate the state because it uses the Immer library,
            // which detects changes to a "draft state" and produces a brand new
            // immutable state based off those changes
            state.value += 1
        },
        decrement: (state) => {
            state.value -= 1
        },
        incrementByAmount: (state, action: PayloadAction<number>) => {
            state.value += action.payload
        },*/

        inputNumber: (state, action) => {
            if (state.fullNumber == "0"){
                state.fullNumber = action.payload
            } else {
                state.fullNumber =   state.fullNumber + action.payload
            }

        }
    },
});

// Action creators are generated for each case reducer function
export const { inputNumber } = calcSlice.actions;

export const selectNumber = (state: stateApp) => state.calc.fullNumber;

export default calcSlice.reducer