import {Button} from "@mui/material";
import {
    inputNumber
} from '../Pages/Calc/store/calculatorSlice';
import {useDispatch} from "react-redux";

interface NumberBtnProps {
    numberEl: number,
}

export const NumberBtn = (props: NumberBtnProps) => {
    const {numberEl} = props;

    const dispatch = useDispatch();
    const onClick = () => {
        dispatch(inputNumber(Number(numberEl)))
    };

    return (
        <Button variant="outlined" onClick={onClick}>{numberEl}</Button>
    );
};