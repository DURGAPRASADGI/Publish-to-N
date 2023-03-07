import { Box } from "@material-ui/core";
import { CheckBox } from "@mui/icons-material";
import { FormControlLabel } from "@mui/material";
import React from "react";

const Multicheckbox = () => {
  return (
    <Box style={{ textAlign: "center" }}>
      <FormControlLabel
        label="Terms and conditions"
        control={<CheckBox />}
        size="small"
      />
      <h1>iamvtgvtgtggv</h1>
      <br></br>

      <FormControlLabel
        label="css"
        control={<CheckBox />}
        size="small"
        color="secondary"
      />
    </Box>
  );
};

export default Multicheckbox;
