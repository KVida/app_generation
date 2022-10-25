import {Button} from "@mui/material";
import {
    btnClear
} from '../Pages/Calc/calculatorSlice';
import {useDispatch} from "react-redux";

interface CleanBtnProps {
    label: string,
}

export const CleanBtn = (props: CleanBtnProps) => {
    const {label} = props;

    const dispatch = useDispatch();
    const onClick =() => {
        dispatch(btnClear())
    };

    return (
        <Button variant="outlined" onClick={onClick}>{label}</Button>
    );
};