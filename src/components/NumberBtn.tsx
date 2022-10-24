import {Button} from "@mui/material";
import {
    inputNumber
} from './../Pages/Calc/calcSlice';

interface NumberBtnProps {
    numberEl: number,
    onClickNumber: void
}

export const NumberBtn = (props: any) => {
    const {numberEl, onClickNumber} = props;

    return (
        <Button variant="outlined" onClick={() =>onClickNumber(inputNumber(String(numberEl )|| "0"))}>{numberEl}</Button>
    );
};