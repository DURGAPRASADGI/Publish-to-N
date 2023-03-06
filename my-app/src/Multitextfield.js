import { InputAdornment, } from "@material-ui/core";
import { TextField } from "@mui/material";
import { Stack } from "@mui/system";
import React, { useState } from "react";

const Multitextfield = () => {
  const [value, setvalue] = useState("");
  const g = (e) => {
    setvalue(e.target.value);
  };
  return (
    <div>
      <Stack spacing={4} direction={"row"}>
        <TextField label="name" variant="outlined" />
        <TextField label="name" variant="filled" />
        <TextField label="name" variant="standard" />
        <TextField label="course" variant="outlined" color="secondary" />
      </Stack>
      <Stack spacing={5} direction={"row"}>
        <TextField
          label="form-input"
          required
          value={value}
          onChange={g}
          error={!value}
          helperText={value ? "do not rememer it" : ""}
        />
      </Stack>

      <Stack spacing={4} direction={"row"}>
        <TextField label="email" helperText={"please check once"} />
      </Stack>
      <Stack spacing={4} direction={"row"}>
        <TextField label="read-only" InputProps={{ readOnly: true }} />
        <TextField label="password" type="password" disabled />
      </Stack>
        <Stack>
        <TextField
          label="amount"
          
          inputProps={
          
          <InputAdornment position="start">$</InputAdornment>}
        />
      </Stack>  
    </div>
  );
};

export default Multitextfield;
