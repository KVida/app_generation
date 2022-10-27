import {Button} from "@mui/material";
import {
    clear
} from '../Pages/Calc/store/calculatorSlice';
import {useDispatch} from "react-redux";

interface CleanBtnProps {
    label: string,
}

export const CleanBtn = (props: CleanBtnProps) => {
    const {label} = props;

    const dispatch = useDispatch();
    const onClick = () => {
        dispatch(clear())
    };

    return (
        <Button variant="outlined" onClick={onClick}>{label}</Button>
    );
};