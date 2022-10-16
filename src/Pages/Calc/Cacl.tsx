import * as React from 'react';
import {TextField, Typography} from "@mui/material";
import Grid from "@mui/material/Grid";
import {NUMBERS} from "../../common/constants";
import {NumberBtn} from "../../components/NumberBtn";
import {styled} from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import {useState} from "react";

const Item = styled(Paper)(({theme}) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));

export const Calc = () => {
    let [inputNumber, setInputNumber] = useState("0");

    const onClickNumber = (event: React.MouseEvent<HTMLElement>) => {
        let newNuber = (event.currentTarget.innerText);

        if (inputNumber == "0") {
            setInputNumber(newNuber);
        } else {
            setInputNumber(inputNumber + newNuber);
        }
    };

    return (
        <div>
            {/* @ts-ignore */}
            <Typography component="h2" sx={{color: "red"}}>Calculation</Typography>

            <TextField id="outlined-basic" type="number" inputProps={{inputMode: 'numeric', pattern: '[0-9]*'}}
                       value={inputNumber}/>

            <div>&nbsp;</div>
            <Grid container  justifyContent="center">
                <Grid item xs={1}>
                </Grid>
                <Grid item xs={3} border="1px solid #256852">
                    <Grid container justifyContent="center">
                        {

                            NUMBERS.map((numberElement) =>
                                <Grid item key={numberElement}>
                                    <NumberBtn numberEl={numberElement} onClickNumber={onClickNumber}/>
                                </Grid>
                            )
                        }
                    </Grid>

                    {/*<Grid>
                        {
                            GROUP_2_ARR_NUMBERS_CALC.map((numEl:any)=>
                                <NumberBtn key={numEl.id} numberEl={numEl.value}/>
                            )
                        }
                    </Grid>
                    <Grid>
                        {
                            GROUP_3_ARR_NUMBERS_CALC.map((numEl:any)=>
                                <NumberBtn key={numEl.id} numberEl={numEl.value}/>
                            )
                        }
                    </Grid>
                    <Grid>
                        {
                            GROUP_4_ARR_NUMBERS_CALC.map((numEl:any)=>
                                <NumberBtn key={numEl.id} numberEl={numEl.value}/>
                            )
                        }
                    </Grid>*/}
                </Grid>
                <Grid item xs={1}>
                </Grid>
            </Grid>
        </div>
    );
};