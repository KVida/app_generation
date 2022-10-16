import {Button} from "@mui/material";

interface NumberBtnProps {
    numberEl: number,
    onClickNumber: void
}

export const NumberBtn = (props: any) => {
    const {numberEl, onClickNumber} = props;

    return (
        <Button variant="outlined" onClick={onClickNumber}>{numberEl}</Button>
    );
};