import React, {useRef} from 'react'
import {
    Avatar
} from "@material-ui/core";

import { makeStyles } from "@material-ui/core/styles"
import avatar from '../../assets/images/utils/Ellipse 12.png'
import axios from "axios";

const useStyles = makeStyles( theme => ({
    avatar: {
        display: "block",
        margin: "0.5rem auto", 
        width: theme.spacing(26),
        height: theme.spacing(26)
    }
}));

const Photo = () => {
    
    const classes = useStyles();
    const [ photo, setPhoto] = React.useState([]);
    const url = `${process.env.REACT_APP_API}/person/profilephoto`;

    const getPhoto = () => {
        axios
        .get(url, {
          headers: {
            Authorization: "Bearer " + localStorage.getItem("CC_Token"),
          },
        })
        .then((response) => {
         setPhoto(response.data.photo);
        })
        .catch((err) => {
            console.log(err);
        });
      };
      React.useEffect(() => {
        getPhoto();
      }, []);

    return (
        <div>
            <Avatar 
                className={classes.avatar}
                src={photo} 
                alt="Ian"
            />
        </div>
    )
}

export default Photo
