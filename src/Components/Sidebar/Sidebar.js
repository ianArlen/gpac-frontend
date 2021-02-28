import React, {useState} from 'react'
import { makeStyles } from "@material-ui/core/styles"
import {Link} from "react-router-dom"

import {
    ListItem,
    ListItemIcon,
    ListItemText,
    Divider,
    List,
    Typography,
    Box
} from "@material-ui/core";

import {
    DataUsage
} from "@material-ui/icons";

import BusinessCenterIcon from '@material-ui/icons/BusinessCenter';
import PeopleIcon from '@material-ui/icons/People';
import BusinessIcon from '@material-ui/icons/Business';
import TelegramIcon from '@material-ui/icons/Telegram';
import RoomIcon from '@material-ui/icons/Room';
import AssignmentIcon from '@material-ui/icons/Assignment';
import ReplyAllIcon from '@material-ui/icons/ReplyAll';

const useStyles = makeStyles( theme => ({
    menuSliderContainer: {
        width: 200,
        height: "100%",
        background: "#511",
        
    },
    avatar: {
        display: "block",
        margin: "0.5rem auto", 
        width: theme.spacing(13),
        height: theme.spacing(13)

    },
    listItem:{
        color: "#fff"
    },
    
    root: {
        '&$selected': {
          backgroundColor: '#1A1C21',
          '&:hover': {
            backgroundColor: '#FF3939',
          }
        },
      },
      selected: {},
}));

const menuItems = [
    {
        listIcon: <DataUsage />,
        listText: "Dashboard",
        listPath: "/"
    },
    {
        listIcon: <BusinessCenterIcon />,
        listText: "Jobs Orders",
        listPath: "/"
    },
    {
        listIcon: <PeopleIcon />,
        listText: "Market",
        listPath: "/market"
    },
    {
        listIcon: <BusinessIcon />,
        listText: "Companies",
        listPath: "/"
    },
    {
        listIcon: <TelegramIcon />,
        listText: "S Projects",
        listPath: "/"
    },
    {
        listIcon: <RoomIcon />,
        listText: "Map",
        listPath: "/map"
    },
    {
        listIcon: <AssignmentIcon />,
        listText: "Tasks Tool",
        listPath: "/"
    },
    {
        listIcon: <ReplyAllIcon />,
        listText: "Send douts",
        listPath: "/"
    }
]

const Sidebar = () => {

    let time = new Date();
    const dayNames = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];
    let monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug",
                            "Sep", "Oct", "Nov", "Dec"];

    const [ctime, setCtime] = useState({
        dayNumber: time.getDate(),
        day: dayNames[time.getDay()],
        month: monthNames[time.getMonth()],
        hour: time.getHours()<10?'0'+time.getHours().toString():time.getHours().toString(),
        minutes: time.getMinutes()<10?'0'+time.getMinutes().toString():time.getMinutes().toString()
    }); 

    const UpdateTime = () => {
        time = new Date();
        setCtime({
            dayNumber: time.getDate(),
            day: dayNames[time.getDay()],
            month: monthNames[time.getMonth()],
            hour: time.getHours()<10?'0'+time.getHours().toString():time.getHours().toString(),
            minutes: time.getMinutes()<10?'0'+time.getMinutes().toString():time.getMinutes().toString()
        });
    };
    setInterval(UpdateTime, 1000)

    const classes = useStyles();

    return (
        <Box 
            style={{background: "#1A1C21"}}
            className={classes.menuSliderContainer} 
            component="div"
        >

            <Divider />
            <List>
                <Box mt={6} >
                {menuItems.map((lsItem, key) => (
                    <ListItem button selected={true} classes={{ root: classes.root, selected: classes.selected }} key={key} component={Link} to={lsItem.listPath}>
                        <ListItemIcon className={classes.listItem}>
                            {lsItem.listIcon}
                        </ListItemIcon>
                        <ListItemText
                            className={classes.listItem} 
                            primary={lsItem.listText} />
                    </ListItem>
                ))}
                </Box>
            </List>
            <Typography align="center" style={{color: "#fff", fontSize: 10}}>{ctime['day']}</Typography>
            <Typography align="center" style={{color: "#fff", fontSize: 10}}>{ctime['month']} {ctime['dayNumber']}th </Typography>
            <Typography align="center" style={{color: "#fff", fontSize: 25}}> {ctime['hour']}:{ctime['minutes']} </Typography>
            <Typography align="center" style={{color: "#fff", fontSize: 10}}>Actual Time </Typography>
            <br /> 
            
        </Box>
    )
}

export default Sidebar
