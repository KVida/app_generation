import {Button} from "@mui/material";
import {
    btnEquals
} from './../Pages/Calc/calcSlice';

interface EqualBtnProps {
    label: string,
    click: any
}

export const EqualBtn = (props: EqualBtnProps) => {
    const {label, click} = props;

    return (
        <Button variant="outlined" onClick={() =>click(btnEquals())}>{label}</Button>
    );
};