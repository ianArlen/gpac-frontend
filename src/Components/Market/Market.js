import React from 'react'
import Brightness1Icon from '@material-ui/icons/Brightness1';
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';
import {Link} from "react-router-dom"
import {
    Box,
    Typography,
    Grid,
    Button, 
    Avatar
} from "@material-ui/core";


import { makeStyles, withStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import MuiTableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";

import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import axios from "axios";

import avatar from '../../assets/images/utils/Group 29.svg'

const TableCell = withStyles({
    root: {
      borderBottom: '5px solid #24292E',
      padding: "6px 0px 6px 16px"
    }
  })(MuiTableCell);
  
  const useStyles = makeStyles(theme => ({
    root: {
      width: "100%",
      marginTop: theme.spacing(0),
      overflowX: "auto"
    },
    table: {
      minWidth: 650
    }
  }));
   

const Market = () => {
  const [ employees, setEmployees] = React.useState([]);
  const [ position, setPosition] = React.useState([]);
  const url = `${process.env.REACT_APP_API}/rol/market`;

    const getEmployees = () => {
      axios
      .get(url, {
        headers: {
          Authorization: "Bearer " + localStorage.getItem("CC_Token"),
        },
      })
      .then((response) => {
         setEmployees(response.data);
         setPosition(response.data[0].marketstall);
      })
      .catch((err) => {
          console.log(err);
      });
    };
    React.useEffect(() => {
      getEmployees();
    }, []);

    const classes = useStyles();
    return (
        <>
        <Box ml={0} mt={0}>
        <Grid container direction="row" alignItems="center">
            <Grid item>
                <Brightness1Icon style={{color:"#FD3939"}}/>
            </Grid>
            <Grid item>
                <Typography style={{color: "#fff", fontSize: 26}}>Market</Typography>
            </Grid>
                <Grid item>
                    <Box ml={80}>
                    <Link to='/candidate'>
                        {position==='Recruiter' || position==='Coach'?
                        <Button 
                          variant="contained" 
                          style={{textTransform: 'none',color:"#fff",background:"#4056F4"}}
                        >
                            Add new talent
                            <Box ml={3}>
                            <AddCircleOutlineIcon style={{color:"#fff",fontSize: 15}}/>
                          </Box>
                      </Button>
                      :<></>}
                    </Link>
                    </Box>
                </Grid>
        
        </Grid>
        </Box>
        <Box ml={6} mt={0} mr={17}>
            <Paper className={classes.root}>
                <Table className={classes.table}>
                    <TableHead style={{background:"#24292E"}}>
                    <TableRow>
                        <TableCell align="left">
                            <Typography style={{color: "#fff", fontSize: 13}}>Name</Typography>
                        </TableCell>
                        <TableCell align="center">
                            <Typography style={{color: "#fff", fontSize: 13}}>Industry</Typography>
                        </TableCell>
                        <TableCell align="center">
                            <Typography style={{color: "#fff", fontSize: 13}}>Job Position</Typography>
                        </TableCell>
                        <TableCell align="center">
                            <Typography style={{color: "#fff", fontSize: 13}}>Phone</Typography>
                        </TableCell>
                        <TableCell align="center">
                            <Typography style={{color: "#fff", fontSize: 13}}>Salary</Typography>
                        </TableCell>
                        <TableCell align="center">
                            <Typography style={{color: "#fff", fontSize: 13}}>Location</Typography>
                        </TableCell>
                        <TableCell align="center">
                            <Typography style={{color: "#fff", fontSize: 13}}></Typography>
                        </TableCell>
                    </TableRow>
                </TableHead>
                <TableBody style={{background:"#34343C"}}>
                {employees.map( (employee ,index) => (
                    <TableRow key={index}>
                      <TableCell component="th" scope="employee">
                      <Grid container direction="employee" alignItems="center">
                        <Grid item>
                            
                            <Avatar 
                              className={classes.avatar}
                              src={employee.photo} 
                              alt="Ian"
                            />
                        </Grid>
                        <Grid item>
                            <Box ml={2}>
                            <List style={{padding: "0"}}>
                              <ListItem style={{padding: "0"}} key={index}>
                                  <Typography style={{color: "#fff", fontSize: 13}}>{employee.firstname}</Typography>
                              </ListItem>
                              <ListItem style={{padding: "0"}} key={index}>
                                  <Typography style={{color: "#fff", fontSize: 10}}>{employee.lastname}</Typography>
                              </ListItem>
                            </List>
                            </Box>
                        </Grid>
                      </Grid>
                      </TableCell>
                      <TableCell align="center">
                        <Typography style={{color: "#fff", fontSize: 10}}>{employee.industry}</Typography>
                      </TableCell>
                      <TableCell align="center">
                        <Typography style={{color: "#fff", fontSize: 10}}>{employee.jobposition}</Typography>
                      </TableCell>
                      <TableCell align="center">
                        <Typography style={{color: "#fff", fontSize: 10}}>{employee.phone}</Typography>  
                       </TableCell>
                      <TableCell align="center">
                        <Typography style={{color: "#fff", fontSize: 10}}>{employee.salary}</Typography> 
                      </TableCell>
                      <TableCell align="center">
                        <Typography style={{color: "#fff", fontSize: 10}}>SN</Typography> 
                      </TableCell>
                      <TableCell align="center">
                          <Typography style={{color: "#fff", fontSize: 13}}><Box border={1}>View Profile</Box></Typography>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
                </Table>
                </Paper>
        </Box>
        
        </>
    )
}

export default Market
