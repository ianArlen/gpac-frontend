import React from 'react'
import Navbar from '../Navbar/Navbar'
import Sidebar from '../Sidebar/Sidebar'
import MapBox from './MapBox'
import CardCompany from './CardCompany'
import { Grid, Typography, Checkbox, Box } from "@material-ui/core";

const Map = () => {
    return (
        <div style={{background: "#20232B"}}>
            <Navbar></Navbar>
            <Grid container>
                <Grid item xs={2}>
                    <Sidebar></Sidebar>
                </Grid>
                <Grid item xs={10}>
                    <Grid container direction="row" alignItems="center">
                        <Grid item>
                            <Typography style={{color: "#fff", fontSize: 15}}>Show only: </Typography>
                        </Grid>
                        <Grid item>
                            <Checkbox style={{color: '#fff'}}/>
                        </Grid>
                        <Grid item>
                            <Typography style={{color: "#fff", fontSize: 15}}>Alphas </Typography>
                        </Grid>
                        <Grid item>
                        <Checkbox
                            defaultChecked
                            style={{color: '#FF4343'}}
                        />
                        </Grid>
                        <Grid item>
                            <Typography style={{color: "#fff", fontSize: 17}}>Job Orders </Typography>
                        </Grid>
                        <Grid item>
                            <Checkbox style={{color: '#fff'}}/>
                        </Grid>
                        <Grid item>
                            <Typography style={{color: "#fff", fontSize: 15}}>Companies </Typography>
                        </Grid>
                    </Grid>
                    <Grid container>
                        <Grid item xs={3}>
                            <Grid container>
                                <Grid item xs={12}>
                                    <Box border={1}>
                                        <CardCompany 
                                            color="#323C4A" 
                                            str1="Company"
                                            str2="Keny, NY"
                                            str3="Aurora Coding"
                                            str4="54789"
                                            str5="Development "
                                            str6="(123) 456 78 90"
                                            ml1={15}
                                            ml2={12}
                                            ml3={6}
                                        />
                                    </Box>
                                </Grid>
                                <Grid item xs={12}>
                                    <Box border={1}>
                                        <CardCompany 
                                            color="#24292E" 
                                            str1="Company"
                                            str2="Keny, NY"
                                            str3="Beijing Studio"
                                            str4="54789"
                                            str5="Video Production"
                                            str6="(123) 456 78 90"
                                            ml1={15}
                                            ml2={13}
                                            ml3={3}
                                        />
                                    </Box>
                                </Grid>
                                <Grid item xs={12}>
                                    <Box border={1}>
                                        <CardCompany 
                                            color="#24292E" 
                                            str1="Company"
                                            str2="Keny, NY"
                                            str3="Marvel Studios"
                                            str4="54789"
                                            str5="Film Company"
                                            str6="(123) 456 78 90"
                                            ml1={15}
                                            ml2={12}
                                            ml3={5}
                                        />
                                    </Box>
                                </Grid>
                                <Grid item xs={12}>
                                    <Box border={1}>
                                        <CardCompany 
                                            color="#24292E" 
                                            str1="Talent"
                                            str2="Keny, NY"
                                            str3="Jonathan Doe"
                                            str4="54789"
                                            str5="Engineer"
                                            str6="(123) 456 78 90"
                                            ml1={18}
                                            ml2={12}
                                            ml3={10}
                                        />
                                    </Box>
                                </Grid>
                                <Grid item xs={12}>
                                    <Box border={1}>
                                        <CardCompany 
                                            color="#24292E" 
                                            str1="Talent"
                                            str2="Keny, NY"
                                            str3="Kate Hotsson"
                                            str4="54789"
                                            str5="Banking Analyst"
                                            str6="(123) 456 78 90"
                                            ml1={18}
                                            ml2={13}
                                            ml3={4}
                                        />
                                    </Box>
                                </Grid>
                                <Grid item xs={12}>
                                    <Box border={1}>
                                        <CardCompany 
                                            color="#24292E" 
                                            str1="Talent"
                                            str2="Keny, NY"
                                            str3="Sr React Developer"
                                            str4="54789"
                                            str5="Aurora codign"
                                            str6=""
                                            ml1={18}
                                            ml2={7}
                                            ml3={0}
                                        />
                                    </Box>
                                </Grid>
                            </Grid>
                        </Grid>
                        <Grid item xs={4}>
                            <MapBox></MapBox>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
            
        </div>
    )
}

export default Map
