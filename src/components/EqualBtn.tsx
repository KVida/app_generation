import {Button} from "@mui/material";
import {
    expressionSolution
} from '../Pages/Calc/store/calculatorSlice';
import {useDispatch} from "react-redux";

interface EqualBtnProps {
}

export const EqualBtn = (props: EqualBtnProps) => {
    const {} = props;

    const dispatch = useDispatch();
    const onClick = () => {
        dispatch(expressionSolution())
    };

    return (
        <Button variant="outlined" onClick={onClick}>=</Button>
    );
};