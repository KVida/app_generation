import {Button} from "@mui/material";
import {
    btnClear
} from './../Pages/Calc/calcSlice';

interface CleanBtnProps {
    label: string,
    click: any
}

export const CleanBtn = (props: CleanBtnProps) => {
    const {label, click} = props;

    return (
        <Button variant="outlined" onClick={() =>click(btnClear())}>{label}</Button>
    );
};