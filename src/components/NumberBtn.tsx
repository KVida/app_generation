import {Button} from "@mui/material";
import {
    inputNumber
} from './../Pages/Calc/calcSlice';

interface NumberBtnProps {
    numberEl: number,
    onClickNumber: any,
}

export const NumberBtn = (props: NumberBtnProps) => {
    const {numberEl, onClickNumber} = props;

    return (
        <Button variant="outlined" onClick={() =>onClickNumber(inputNumber(String(numberEl)))}>{numberEl}</Button>
    );
};