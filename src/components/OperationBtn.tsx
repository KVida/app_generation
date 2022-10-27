import {Button} from "@mui/material";
import {
    inputOperation
} from '../Pages/Calc/store/calculatorSlice';
import {useDispatch} from "react-redux";
import {Operations} from "../common/type";

interface OperationBtnProps {
    label: Operations,
}

export const OperationBtn = (props: OperationBtnProps) => {
    const {label} = props;

    const dispatch = useDispatch();
    const onClick = () => {
        dispatch(inputOperation(label))
    };

    return (
        <Button variant="outlined" onClick={onClick}>{label}</Button>
    );
};