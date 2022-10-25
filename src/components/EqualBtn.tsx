import {Button} from "@mui/material";
import {
    btnEquals
} from '../Pages/Calc/calculatorSlice';
import {useDispatch} from "react-redux";

interface EqualBtnProps {
    label: string,
}

export const EqualBtn = (props: EqualBtnProps) => {
    const {label} = props;

    const dispatch = useDispatch();
    const onClick =() => {
        dispatch(btnEquals())
    };

    return (
        <Button variant="outlined" onClick={onClick}>{label}</Button>
    );
};