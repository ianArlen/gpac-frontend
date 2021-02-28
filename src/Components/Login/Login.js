import React, {useRef} from 'react'
import { Grid,Paper, Avatar, TextField, Button, Typography } from '@material-ui/core'
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import makeToast from "../Toaster/Toaster";
import axios from "axios";
import {Link} from "react-router-dom"

const Login=(props)=>{
    const emailRef = useRef();
    const passwordRef = useRef();
    const paperStyle={padding :20,height:'70vh',width:280, margin:"20px auto"}
    const avatarStyle={backgroundColor:'#1bbd7e'}
    const btnstyle={margin:'8px 0'}
  
    const loginUser = () => {
        const email = emailRef.current.value;
        const password = passwordRef.current.value;
        const url = `${process.env.REACT_APP_API}/user/login`;
        axios
          .post(url, {
            email,
            password,
          })
          .then((response) => {
            makeToast("success", response.data.message);
            localStorage.setItem("CC_Token", response.data.token);
            props.history.push("/market");
          })
          .catch((err) => {
            if (
              err &&
              err.response &&
              err.response.data &&
              err.response.data.message
            )
              makeToast("error", err.response.data.message);
          });
    };
    
    return(
        <Grid>
            <Paper elevation={10} style={paperStyle}>
                <Grid align='center'>
                     <Avatar style={avatarStyle}><LockOutlinedIcon/></Avatar>
                    <h2>Sign In</h2>
                </Grid>
                <TextField 
                    label='Username' 
                    placeholder='Enter username' 
                    fullWidth 
                    required
                    inputRef={emailRef}                
                />
                <TextField 
                    label='Password' 
                    placeholder='Enter password' 
                    type='password' 
                    fullWidth 
                    required 
                    inputRef={passwordRef}/>

                <FormControlLabel
                    control={
                    <Checkbox
                        name="checkedB"
                        color="primary"
                    />
                    }
                    label="Remember me"
                 />
                 
                    <Button 
                        type='submit' 
                        color='primary' 
                        variant="contained" 
                        style={btnstyle} 
                        fullWidth
                        onClick={loginUser}
                    >Sign in</Button>
                
                <Typography >
                     <Link href="/" >
                        Forgot password ?
                </Link>
                </Typography>
                <Typography > Do you have an account ?
                     <Link href="/" >
                        Sign Up 
                </Link>
                </Typography>
            </Paper>
        </Grid>
    )
}

export default Login