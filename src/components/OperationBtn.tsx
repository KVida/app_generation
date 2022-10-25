import {Button} from "@mui/material";
import {
    operationCalc
} from '../Pages/Calc/calculatorSlice';
import {useDispatch} from "react-redux";
import {Operations} from "../common/type";

interface OperationBtnProps {
    label: Operations,
}

export const OperationBtn = (props: OperationBtnProps) => {
    const {label} = props;

    const dispatch = useDispatch();
    const onClick =() => {
        dispatch(operationCalc(label))
    };

    return (
        <Button variant="outlined" onClick={onClick}>{label}</Button>
    );
};