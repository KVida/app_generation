import * as React from 'react';
import {TextField, Typography} from "@mui/material";
import Grid from "@mui/material/Grid";
import {NUMBERS, OPERATIONS_CALC} from "../../common/constants";
import {NumberBtn} from "../../components/NumberBtn";
import {styled} from '@mui/material/styles';
import Paper from '@mui/material/Paper';

import {useDispatch, useSelector} from "react-redux";
import {
    selectNumber
} from './calculatorSlice';
import {CleanBtn} from "../../components/CleanBtn";
import {OperationBtn} from "../../components/OperationBtn";
import {EqualBtn} from "../../components/EqualBtn";

const Item = styled(Paper)(({theme}) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));

export const Calc = () => {
    const inputStore = useSelector(selectNumber);
    const dispatch = useDispatch();

    return (
        <div>
            {/* @ts-ignore */}
            <Typography component="h2" sx={{color: "red"}}>Calculation</Typography>

            <TextField id="outlined-basic" value={inputStore.expression}/>

            <div>&nbsp;</div>
            <Grid container justifyContent="center">
                <Grid item xs={1}>
                </Grid>
                <Grid item xs={3}>
                    <Grid container justifyContent="center">
                        {

                            NUMBERS.map((numberElement) =>
                                <Grid item key={numberElement}>
                                    <NumberBtn numberEl={numberElement}/>
                                </Grid>
                            )
                        }
                    </Grid>
                </Grid>
                <Grid item xs={1}>
                    <Grid container justifyContent="center">
                        <Grid item>
                            <CleanBtn label="C"/>
                        </Grid>
                        <Grid item>
                            {
                                OPERATIONS_CALC.map((operationElement) =>
                                    <OperationBtn key={operationElement} label={operationElement}/>
                                )
                            }
                        </Grid>
                        <Grid item>
                            <EqualBtn label="="/>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item xs={1}>
                </Grid>
            </Grid>
        </div>
    );
};