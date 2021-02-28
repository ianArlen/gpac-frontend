import React from 'react'
import { makeStyles } from "@material-ui/core/styles"
import {
    AppBar,
    Toolbar,
    Avatar,
    Box,
    TextField
} from "@material-ui/core";

import avatar from '../../assets/images/utils/Group 29.svg'
import SelectComp from '../Select/SelectComp'

import SearchIcon from '@material-ui/icons/Search';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';

const useStyles = makeStyles( theme => ({
    avatar: {
        display: "block",
        margin: "0.5rem auto", 
        width: theme.spacing(13),
        height: theme.spacing(13)

    }
}));


const Navbar = () => {

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
                    <TextField 
                        label="Quick Search ..."
                        InputLabelProps={{
                            style: { color: '#fff', fontSize: 10, width: 100, height: 61}
                        }}
                        InputProps={{ disableUnderline: true }}
                    />
                    <SelectComp value="All Entities"></SelectComp>
                    <SelectComp value="Industry"></SelectComp>
                    <SelectComp value="Location"></SelectComp>
                    </Box>
                    
                    <SearchIcon style={{background: "red"}}></SearchIcon>
                    <Box ml={30}>

                    </Box>
                    <Box ml={0}>
                    <TextField 
                        label="Advance Search"
                        InputLabelProps={{
                            style: { 
                                    color: '#fff', 
                                    fontSize: 10, 
                                    width: 100, 
                                    height: 61,
                                    marginLeft: 100
                                }
                        }}
                        InputProps={{ disableUnderline: true }}
                    />
                    </Box>
                    <MoreHorizIcon></MoreHorizIcon>
                </Toolbar>
            </AppBar>
        </Box>
        </>
    )
}

export default Navbar
