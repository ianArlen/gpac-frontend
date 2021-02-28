import React, {useRef} from 'react'
import NavCandidate from './NavCandidate'
import Photo from './Photo'
import { 
    Grid, 
    Box, 
    Typography, 
    Button,
    Card,
    CardContent,
    TextField
 } from "@material-ui/core"
import { makeStyles } from '@material-ui/core/styles';

import Sidebar from '../Sidebar/Sidebar'
import SelectComp from '../Select/SelectComp'

import Brightness1Icon from '@material-ui/icons/Brightness1';

import axios from "axios";
import makeToast from "../Toaster/Toaster";

const useStyles = makeStyles({
    root: {
      backgroundColor: "#34343C",
      width: "600px"
    },
    bullet: {
      display: "inline-block",
      margin: '0 2px',
      transform: 'scale(0.8)',
    },
    pos: {
      marginBottom: 5,
    },
  });
const Candidate = (props) => {
    const firstnameRef = useRef();
    const lastnameRef= useRef();
    const professionRef = useRef();
    const industryRef = useRef();
    const jobpositionRef = useRef(); 
    const phoneRef = useRef();
    const salaryRef = useRef();
    const emailRef = useRef();
    const passwordRef = useRef();
    
    const classes = useStyles();
    const bull = <span className={classes.bullet}>•</span>;

    const registerUser = (props) => {
        const firstname = firstnameRef.current.value;
        const lastname = lastnameRef.current.value;
        const profession = professionRef.current.value; 
        const industry = industryRef.current.value; 
        const jobposition = jobpositionRef.current.value;  
        const phone = phoneRef.current.value; 
        const salary = salaryRef.current.value;  
        const email = emailRef.current.value; 
        const password = passwordRef.current.value;
        
        const tok = 'Bearer ' + localStorage.getItem("CC_Token");
        const headers = {authorization : tok};
        const url = `${process.env.REACT_APP_API}/person/registercandidate`;


        axios
        .post(url, {
            firstname,
            lastname,
            profession,
            industry, 
            jobposition,  
            phone, 
            salary, 
            email, 
            password
  
        },{headers})
        .then((response) => {
          makeToast("success", response.data.message);
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


    return (
        <div style={{background: "#20232B"}}>
            <NavCandidate />
            <Grid container>
                <Grid item xs={2}>
                    <Sidebar />
                </Grid>
                <Grid item xs={10}>
                    <Grid container direction="row" alignItems="center">
                        <Grid item>
                            <Brightness1Icon style={{color:"#FD3939"}}/>  
                        </Grid>
                        <Grid item>
                            <Typography style={{color: "#fff", fontSize: 26}}>New Talent</Typography>
                        </Grid>
                    </Grid>
                    <Grid container>
                        <Grid item xs={4}>
                            <Grid container>
                                <Grid item xs={12}>
                                    <Grid container justify = "center">
                                        <Photo/>
                                    </Grid>
                                </Grid>
                                <Grid item xs={12}>
                                    <Grid container justify = "center">
                                        <Box mt={2} mb={2}>
                                            <Button 
                                                variant="contained" 
                                                style={{textTransform: 'none',color:"#fff",background:"#4056F4", width:"208px"}}
                                            >
                                                Safe as draft
                                            </Button>
                                        </Box>
                                    </Grid>
                                </Grid>
                                <Grid item xs={12}>
                                    <Grid container justify = "center">
                                        <Box mt={2} mb={2}>
                                            <Button 
                                                variant="contained" 
                                                style={{textTransform: 'none',color:"#fff",background:"#4056F4", width:"208px" }}
                                                onClick={registerUser}
                                            >
                                                Save and send to couch
                                            </Button>
                                        </Box>
                                    </Grid>
                                </Grid>
                                <Grid item xs={12}>
                                    <Grid container justify = "center">
                                        <Box mt={2} mb={2}>
                                            <Button 
                                                variant="contained" 
                                                style={{textTransform: 'none',color:"#fff",background:"#3B4048", width:"208px" }}
                                            >
                                                Discard
                                            </Button>
                                        </Box>
                                    </Grid>
                                </Grid>
                            </Grid>
                        </Grid>
                        <Grid item xs={7}>
                            <Grid container direction="row" alignItems="center">
                                <Grid item xs={2}>
                                    <Box p={1} style={{backgroundColor:"#34343C"}}>
                                        <Typography mt={2} mb={2} aling="left" style={{color: "#fff", fontSize: 13}}>
                                            Profile
                                        </Typography>
                                    </Box>
                                </Grid>
                                <Grid item xs={2}>
                                    <Box p={1} style={{backgroundColor:"#4056F4"}}>
                                        <Typography mt={2} mb={2} aling="left" style={{color: "#fff", fontSize: 13}}>
                                            Resume
                                        </Typography>
                                    </Box>
                                </Grid>
                                <Grid item xs={2}>
                                    <Box p={1} style={{backgroundColor:"#4056F4"}}>
                                        <Typography mt={2} mb={2} aling="left" style={{color: "#fff", fontSize: 13}}>
                                            Social Profile
                                        </Typography>
                                    </Box>
                                </Grid>
                            </Grid>
                           <Grid container justify = "left">
                           <Grid item xs={12}>
                                <Card className={classes.root}>
                                    <CardContent>
                                        <Grid container>
                                            <Grid item xs={4}>
                                                <Grid container>                                    
                                                    <Typography mt={2} mb={2} aling="left" style={{color: "#fff", fontSize: 13}}>
                                                        First Name
                                                    </Typography>
                                                </Grid>
                                                <Grid container>                                    
                                                <TextField 
                                                    label="Text"
                                                    InputLabelProps={{
                                                        style: { color: "#fff", fontSize: 12}
                                                    }}
                                                    InputProps={{ disableUnderline: true}}
                                                    labelRoot={{
                                                        style:{fontSize: 30,color: "red"}
                                                    }}
                                                    style={{backgroundColor:"#20232B",width: 150}}
                                                    inputRef={firstnameRef}
                                                />
                                                </Grid>
                                                <Grid container>                                    
                                                    <Typography mt={2} mb={2} aling="left" style={{color: "#fff", fontSize: 13}}>
                                                        Wish salary
                                                    </Typography>
                                                </Grid>
                                                <Grid container>                                    
                                                <TextField 
                                                    label="Text"
                                                    InputLabelProps={{
                                                        style: { color: "#fff", fontSize: 12}
                                                    }}
                                                    InputProps={{ disableUnderline: true}}
                                                    labelRoot={{
                                                        style:{fontSize: 30,color: "red"}
                                                    }}
                                                    style={{backgroundColor:"#20232B",width: 150}}
                                                    inputRef={salaryRef}
                                                />
                                                </Grid>
                                                <Grid container>                                    
                                                    <Typography mt={2} mb={2} aling="left" style={{color: "#fff", fontSize: 13}}>
                                                        Seniority
                                                    </Typography>
                                                </Grid>
                                                <Grid container>                                    
                                                    <TextField 
                                                        label="Text"
                                                        InputLabelProps={{
                                                            style: { color: "#fff", fontSize: 12}
                                                        }}
                                                        InputProps={{ disableUnderline: true}}
                                                        labelRoot={{
                                                            style:{fontSize: 30,color: "red"}
                                                        }}
                                                        style={{backgroundColor:"#20232B",width: 150}}
                                                        inputRef={ jobpositionRef }
                                                    />
                                                </Grid>
                                                <Grid container>                                    
                                                    <Typography mt={2} mb={2} aling="left" style={{color: "#fff", fontSize: 13}}>
                                                        Phone
                                                    </Typography>
                                                </Grid>
                                                <Grid container>                                    
                                                    <TextField 
                                                        label="Text"
                                                        InputLabelProps={{
                                                            style: { color: "#fff", fontSize: 12}
                                                        }}
                                                        InputProps={{ disableUnderline: true}}
                                                        labelRoot={{
                                                            style:{fontSize: 30,color: "red"}
                                                        }}
                                                        style={{backgroundColor:"#20232B",width: 150}}
                                                        inputRef={phoneRef}
                                                    />
                                                </Grid>
                                                <Grid container>
                                                <Typography mt={2} mb={2} aling="left" style={{color: "#fff", fontSize: 13}}>
                                                    Status for Process
                                                </Typography>
                                                    </Grid>
                                                    <Grid container>                                    
                                                        <SelectComp value="Select"/>  
                                                    </Grid>
                                                
                                            </Grid>
                                            <Grid item xs={4}>                                    
                                                <Grid container>                                    
                                                    <Typography mt={2} mb={2} aling="left" style={{color: "#fff", fontSize: 13}}>
                                                        Last Name
                                                    </Typography>
                                                </Grid>
                                                <Grid container>                                    
                                                    <TextField 
                                                        label="Text"
                                                        InputLabelProps={{
                                                            style: { color: "#fff", fontSize: 12}
                                                        }}
                                                        InputProps={{ disableUnderline: true}}
                                                        labelRoot={{
                                                            style:{fontSize: 30,color: "red"}
                                                        }}
                                                        style={{backgroundColor:"#20232B",width: 150}}
                                                        inputRef={ lastnameRef }
                                                    />
                                                </Grid>
                                                <Grid container>                                    
                                                    <Typography mt={2} mb={2} aling="left" style={{color: "#fff", fontSize: 13}}>
                                                        Fuctional Title
                                                    </Typography>
                                                </Grid>
                                                <Grid container>                                    
                                                   <SelectComp value="Select"/>
                                                </Grid>
                                                <Grid container>                                    
                                                    <Typography mt={2} mb={2} aling="left" style={{color: "#fff", fontSize: 13}}>
                                                        Industry
                                                    </Typography>
                                                </Grid>
                                                <Grid container>                                    
                                                    <TextField 
                                                        label="Text"
                                                        InputLabelProps={{
                                                            style: { color: "#fff", fontSize: 12}
                                                        }}
                                                        InputProps={{ disableUnderline: true}}
                                                        labelRoot={{
                                                            style:{fontSize: 30,color: "red"}
                                                        }}
                                                        style={{backgroundColor:"#20232B",width: 150}}
                                                        inputRef={ industryRef }
                                                    />
                                                </Grid>
                                                <Grid container>                                    
                                                    <Typography mt={2} mb={2} aling="left" style={{color: "#fff", fontSize: 13}}>
                                                        Email
                                                    </Typography>
                                                </Grid>
                                                <Grid container>                                    
                                                <TextField 
                                                        label="Text"
                                                        InputLabelProps={{
                                                            style: { color: "#fff", fontSize: 12}
                                                        }}
                                                        InputProps={{ disableUnderline: true}}
                                                        labelRoot={{
                                                            style:{fontSize: 30,color: "red"}
                                                        }}
                                                        style={{backgroundColor:"#20232B",width: 150}}
                                                        inputRef={emailRef}
                                                    />
                                                </Grid>
                                                <Grid container>
                                                <Typography mt={2} mb={2} aling="left" style={{color: "#fff", fontSize: 13}}>
                                                    Relocation
                                                </Typography>
                                                    </Grid>
                                                    <Grid container>                                    
                                                        <SelectComp value="Select"/>   
                                                    </Grid>
                                            </Grid>
                                            <Grid item xs={4}>                                    
                                                    <Grid container>                                    
                                                    <Typography mt={2} mb={2} aling="left" style={{color: "#fff", fontSize: 13}}>
                                                        Status
                                                    </Typography>
                                                    </Grid>
                                                    <Grid container>                                    
                                                        <SelectComp value="Select"/>    
                                                    </Grid>
                                                    <Grid container>                                    
                                                    <Typography mt={2} mb={2} aling="left" style={{color: "#fff", fontSize: 13}}>
                                                        Profession
                                                    </Typography>
                                                    </Grid>
                                                    <Grid container>                                    
                                                        <TextField 
                                                            label="Text"
                                                            InputLabelProps={{
                                                                style: { color: "#fff", fontSize: 12}
                                                            }}
                                                            InputProps={{ disableUnderline: true}}
                                                            labelRoot={{
                                                                style:{fontSize: 30,color: "red"}
                                                            }}
                                                            style={{backgroundColor:"#20232B",width: 150}}
                                                            inputRef={professionRef}
                                                        />   
                                                    </Grid>
                                                    <Grid container>                                    
                                                    <Typography mt={2} mb={2} aling="left" style={{color: "#fff", fontSize: 13}}>
                                                        Location
                                                    </Typography>
                                                    </Grid>
                                                    <Grid container>                                    
                                                        <TextField 
                                                            label="Text"
                                                            InputLabelProps={{
                                                                style: { color: "#fff", fontSize: 12}
                                                            }}
                                                            InputProps={{ disableUnderline: true}}
                                                            labelRoot={{
                                                                style:{fontSize: 30,color: "red"}
                                                            }}
                                                            style={{backgroundColor:"#20232B",width: 150}}
                                                        />   
                                                    </Grid>
                                                    <Grid container> 
                                                    <Typography mt={2} mb={2} aling="left" style={{color: "#fff", fontSize: 13}}>
                                                        Password
                                                    </Typography>
                                                    </Grid>
                                                    <Grid container>                                    
                                                        <TextField 
                                                            label="Text"
                                                            InputLabelProps={{
                                                                style: { color: "#fff", fontSize: 12}
                                                            }}
                                                            InputProps={{ disableUnderline: true}}
                                                            labelRoot={{
                                                                style:{fontSize: 30,color: "red"}
                                                            }}
                                                            style={{backgroundColor:"#20232B",width: 150}}
                                                            inputRef={ passwordRef }
                                                        />
                                                    </Grid>
                                            </Grid>
                                        </Grid>
                                    </CardContent>
                                </Card>
                            </Grid>
                            <Grid item xs={12}>
                             <Grid container justify="center">
                              <Grid item >
                                <Box mt={2} mb={2}>
                                <Card className={classes.root}>
                                 <CardContent>
                                  <Grid container>
                                    <Grid item xs={12}>
                                     <Typography mt={2} mb={2} aling="left" style={{color: "#fff", fontSize: 20}}>
                                        Attachments
                                     </Typography>
                                    </Grid>
                                  </Grid>
                                  <Box mt={2} mb={2}>
                                  <Grid container>
                                    
                                    <Grid item xs={4}>
                                    <Grid container>
                                      <Grid item xs={12}>
                                        <Typography mt={2} mb={2} aling="rigth" style={{color: "#fff", fontSize: 15}}>
                                            Resume
                                        </Typography>
                                      </Grid>
                                      <Grid item xs={12}>
                                        <Typography mt={2} mb={2} style={{color: "#fff", fontSize: 10}}>
                                            No files here
                                        </Typography>
                                      </Grid>
                                     </Grid>
                                    </Grid>
                                    <Grid item xs={3}>
                                    <Grid container justify="rigth">
                                    <Grid item xs={12}>
                                     </Grid>
                                     </Grid>
                                    </Grid>
                                    <Grid item xs={5}>
                                    <Button 
                                        variant="contained" 
                                        style={{textTransform: 'none',color:"#fff",background:"#34343C", width:"110px", height:"25px", fontSize: '9px' }}
                                    >
                                        Unpload new file
                                    </Button>
                                    <Button 
                                        variant="contained" 
                                        style={{textTransform: 'none',color:"#fff",background:"#4056F4", width:"80px", height:"25px", fontSize: '10px' }}
                                    >
                                        Submit
                                    </Button>
                                    </Grid>
                                  </Grid>
                                  </Box>
                                  <Box mt={2} mb={2}>
                                  <Grid container>
                                  <Grid item xs={4}>
                                    <Grid container>
                                      <Grid item xs={12}>
                                        <Typography mt={2} mb={2} aling="rigth" style={{color: "#fff", fontSize: 15}}>
                                            Cover Letter
                                        </Typography>
                                      </Grid>
                                      <Grid item xs={12}>
                                        <Typography mt={2} mb={2} style={{color: "#fff", fontSize: 10}}>
                                            No files here
                                        </Typography>
                                      </Grid>
                                     </Grid>
                                    </Grid>
                                    <Grid item xs={3}>
                                    <Grid container justify="rigth">
                                    <Grid item xs={12}>
                                     </Grid>
                                     </Grid>
                                    </Grid>
                                    <Grid item xs={5}>
                                    <Button 
                                        variant="contained" 
                                        style={{textTransform: 'none',color:"#fff",background:"#34343C", width:"110px", height:"25px", fontSize: '9px' }}
                                    >
                                        Unpload new file
                                    </Button>
                                    <Button 
                                        variant="contained" 
                                        style={{textTransform: 'none',color:"#fff",background:"#4056F4", width:"80px", height:"25px", fontSize: '10px' }}
                                    >
                                        Submit
                                    </Button>
                                    </Grid>

                                  </Grid>
                                  </Box>
                                  <Box mb={2} mt={2}>
                                  <Grid container>
                                  <Grid item xs={4}>
                                    <Grid container>
                                      <Grid item xs={12}>
                                        <Typography mt={2} mb={2} aling="rigth" style={{color: "#fff", fontSize: 15}}>
                                            Cover Letter
                                        </Typography>
                                      </Grid>
                                      <Grid item xs={12}>
                                        <Typography mt={2} mb={2} style={{color: "#fff", fontSize: 10}}>
                                            No files here
                                        </Typography>
                                      </Grid>
                                     </Grid>
                                    </Grid>
                                    <Grid item xs={3}>
                                    <Grid container justify="rigth">
                                    <Grid item xs={12}>
                                     </Grid>
                                     </Grid>
                                    </Grid>
                                    <Grid item xs={5}>
                                    <Button 
                                        variant="contained" 
                                        style={{textTransform: 'none',color:"#fff",background:"#34343C", width:"110px", height:"25px", fontSize: '9px' }}
                                    >
                                        Unpload new file
                                    </Button>
                                    <Button 
                                        variant="contained" 
                                        style={{textTransform: 'none',color:"#fff",background:"#4056F4", width:"80px", height:"25px", fontSize: '10px' }}
                                    >
                                        Submit
                                    </Button>
                                    </Grid>

                                  </Grid>
                                  </Box>
                                  <Box mt={2} mb={2}>
                                  <Grid container>
                                  <Grid item xs={4}>
                                    <Grid container>
                                      <Grid item xs={12}>
                                        <Typography mt={2} mb={2} aling="rigth" style={{color: "#fff", fontSize: 15}}>
                                            Cover Letter
                                        </Typography>
                                      </Grid>
                                      <Grid item xs={12}>
                                        <Typography mt={2} mb={2} style={{color: "#fff", fontSize: 10}}>
                                            No files here
                                        </Typography>
                                      </Grid>
                                     </Grid>
                                    </Grid>
                                    <Grid item xs={3}>
                                    <Grid container justify="rigth">
                                    <Grid item xs={12}>
                                     </Grid>
                                     </Grid>
                                    </Grid>
                                    <Grid item xs={5}>
                                    <Button 
                                        variant="contained" 
                                        style={{textTransform: 'none',color:"#fff",background:"#34343C", width:"110px", height:"25px", fontSize: '9px' }}
                                    >
                                        Unpload new file
                                    </Button>
                                    <Button 
                                        variant="contained" 
                                        style={{textTransform: 'none',color:"#fff",background:"#4056F4", width:"80px", height:"25px", fontSize: '10px' }}
                                    >
                                        Submit
                                    </Button>
                                    </Grid>

                                  </Grid>
                                  </Box>
                                 </CardContent>
                                </Card>
                                </Box>
                              </Grid>
                             </Grid>
                            </Grid>
                            <Grid item xs={12}>
                             <Grid container justify="center">
                              <Grid item >
                              <Card className={classes.root}>
                                 <CardContent>
                                  <Grid container>
                                    <Grid item xs={12}>
                                    <Box mb={2} mt={2}>
                                     <Typography mt={2} mb={2} aling="left" style={{color: "#fff", fontSize: 20}}>
                                        Notes
                                     </Typography>
                                     </Box> 
                                     <Box mb={2} mt={2}>
                                     <Typography mt={2} mb={2} aling="left" style={{color: "#fff", fontSize: 9}}>
                                        There's no notes. Do you want to add a new one 
                                     </Typography>
                                     </Box>
                                    </Grid>
                                  </Grid>
                                 </CardContent>
                                </Card>
                              </Grid>
                             </Grid>
                             
                            </Grid>
                           </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </div>
    )
}

export default Candidate
