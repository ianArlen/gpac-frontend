import React from 'react'
import { Grid, Typography, Box } from "@material-ui/core";

const CardCompany = ({color,str1,str2,str3,str4,str5,str6,ml1,ml2,ml3}) => {
    return (
        <div>
            <Box style={{backgroundColor:color}}>
                <Grid container direction="row" alignItems="center">
                    <Grid item>
                        <Typography style={{color: "#fff", fontSize: 15}}>{str1} </Typography>
                    </Grid>
                    <Grid item >
                        <Box ml={ml1}>
                        <Typography aling="left" style={{color: "#fff", fontSize: 15}}>{str2}</Typography>
                        </Box>
                    </Grid>
                </Grid>
                <Grid container direction="row" alignItems="center">
                    <Grid item>
                        <Typography style={{color: "#fff", fontSize: 17}}>{str3} </Typography>
                    </Grid>
                    <Grid item >
                        <Box ml={ml2}>
                        <Typography aling="left" style={{color: "#fff", fontSize: 15}}>{str4}</Typography>
                        </Box>
                    </Grid>
                </Grid>
                <Grid container direction="row" alignItems="center">
                    <Grid item>
                        <Typography style={{color: "#fff", fontSize: 15}}>{str5} </Typography>
                    </Grid>
                    <Grid item >
                        <Box ml={ml3}>
                        <Typography aling="left" style={{color: "#fff", fontSize: 15}}>{str6}</Typography>
                        </Box>
                    </Grid>
                </Grid>
            </Box> 
        </div>
    )
}

export default CardCompany
