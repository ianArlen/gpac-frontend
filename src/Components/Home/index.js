import React from 'react'
import Navbar from '../Navbar/Navbar'
import Sidebar from '../Sidebar/Sidebar'
import Market from '../Market/Market'
import { Grid } from "@material-ui/core";


const Home = () => {
    return (
        <div style={{background: "#20232B"}}>
            <Navbar></Navbar>
            <Grid container>
            <Grid item xs={2}>
                <Sidebar></Sidebar>
            </Grid>
            <Grid item xs={10}>
                    <Market></Market>
            </Grid>
            </Grid>
        </div>
    )
}

export default Home
