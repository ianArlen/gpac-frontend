import React from 'react'
import { makeStyles } from "@material-ui/core/styles"
import {Link} from "react-router-dom"
import {
    AppBar,
    Toolbar,
    Avatar,
    Box,
    TextField,
    Typography
} from "@material-ui/core";

import avatar from '../../assets/images/utils/Group 29.svg'

import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';

const useStyles = makeStyles( theme => ({
    avatar: {
        display: "block",
        margin: "0.5rem auto", 
        width: theme.spacing(13),
        height: theme.spacing(13)

    }
}));

const NavCandidate = () => {

    const classes = useStyles();

    return (
        <>
            <Box component="nav">
                <AppBar position="static" style={{background: "#20232B"}}>
                    <Toolbar style={{height: 36}}>
                    <Box mt={5} ml={3}>
                        <Avatar 
                            className={classes.avatar}
                            src={avatar} 
                            alt="Ian"
                        />
                    </Box>
                    <Box ml={12}>
                        <Link to='/market'>
                            <ArrowBackIosIcon style={{color:"#FF3939",size:'80'}}/>
                        </Link>
                    </Box>
                    <Typography style={{color: "#fff", fontSize: 18}}>Back</Typography>
                    </Toolbar>
                </AppBar>
            </Box>  
        </>
    )
}

export default NavCandidate
