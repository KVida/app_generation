import {Button} from "@mui/material";
import {
    operationCalc
} from './../Pages/Calc/calcSlice';

interface OperationBtnProps {
    label: string,
    click: any
}

export const OperationBtn = (props: OperationBtnProps) => {
    const {label, click} = props;

    return (
        <Button variant="outlined" onClick={() => click(operationCalc(label))}>{label}</Button>
    );
};