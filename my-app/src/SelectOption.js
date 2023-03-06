import { Box, MenuItem, TextField } from "@material-ui/core";
import React from "react";

const SelectOption = () => {
  return (
    <div>
      <TextField
        label="country"
        variant="outlined"
        select
        style={{ width: "200px" }}
      >
        <MenuItem value="in">india</MenuItem>
        <MenuItem value="us">us</MenuItem>
        <MenuItem value="uk">uk</MenuItem>
      </TextField>
    </div>
  );
};

export default SelectOption;
