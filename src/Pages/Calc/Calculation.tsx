import * as React from 'react';
import {TextField} from "@mui/material";
import Grid from "@mui/material/Grid";
import {NumberBtn} from "../../components/NumberBtn";
import {styled} from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import {useDispatch, useSelector} from "react-redux";
import {
    selectExpression,
    selectCalculatorStore
} from './store/calculatorSlice';
import {CleanBtn} from "../../components/CleanBtn";
import {OperationBtn} from "../../components/OperationBtn";
import {EqualBtn} from "../../components/EqualBtn";
import {DIGIT, OPERATIONS_CALC} from "./constants";
import {ColorPalett} from "../../common/constantsColor";
import {HeaderPage} from "../../components/HeaderPage";

const Item = styled(Paper)(({theme}) => ({
    backgroundColor: theme.palette.mode === 'dark' ? ColorPalett.background_color_dark : ColorPalett.background_color_light,
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));

const DivComponentCalculation = styled('div')(({theme}) => ({
    width: '450px',
    margin: '0 auto',
}));

export const Calc = () => {
    const expressionStore = useSelector(selectExpression);
    const inputStore = useSelector(selectCalculatorStore);
    const dispatch = useDispatch();

    return (
        <div>
            {/* @ts-ignore */}
            <HeaderPage label='Calculation'/>

            <DivComponentCalculation>
                <TextField id="outlined-basic" value={expressionStore}/>

                <div>&nbsp;</div>
                <Grid container justifyContent="center">
                    <Grid item xs={1}>
                    </Grid>
                    <Grid item xs={8}>
                        <Grid container justifyContent="center" spacing={2}>
                            {

                                DIGIT.map((numberElement) =>
                                    <Grid item key={numberElement}>
                                        <NumberBtn numberEl={numberElement}/>
                                    </Grid>
                                )
                            }
                        </Grid>
                    </Grid>
                    <Grid item xs={2}>
                        <Grid container justifyContent="center" spacing={2}>
                            <Grid item>
                                <CleanBtn label="C"/>
                            </Grid>

                            {
                                OPERATIONS_CALC.map((operationElement) =>
                                    <Grid item key={operationElement}>
                                        <OperationBtn label={operationElement}/>
                                    </Grid>
                                )
                            }

                            <Grid item>
                                <EqualBtn/>
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item xs={1}>
                    </Grid>
                </Grid>
            </DivComponentCalculation>
        </div>
    );
};