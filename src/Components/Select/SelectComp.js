import React from "react";

import { makeStyles } from "@material-ui/core/styles";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";


const useStyles = makeStyles({
  formControl: {
    width: 100,
    height: 61
  },
  label: {
    fontSize: 11,
    color: "#fff",
    "&.Mui-focused": {
      color: "#fff",
    },
  },
  select: {
    "&:after": {
      borderBottomColor: "#20232B",
    },
    "&:before": {
        borderBottomColor: "#20232B",
    },
    "& .MuiSvgIcon-root": {
      color: "#FF3939",
    },
  },
});

const SelectComp = ( {value} ) => {
  const classes = useStyles();

  return (
      
      <FormControl className={classes.formControl}
      >
        <InputLabel
          id="simple-select"
          className={classes.label}
          style={{ borderLeft: '0.1em solid #fff', padding: '0.5em' }}
        >
          {value}
        </InputLabel>
        <Select
          labelId="simple-select"
          id="demo-simple-select"
          className={classes.select}
        >
          <MenuItem value={10}>Ten</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem>
        </Select>
      </FormControl>
      

  );
};

export default SelectComp;