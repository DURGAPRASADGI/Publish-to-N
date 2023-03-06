import {
  FormControl,
  FormControlLabel,
  FormHelperText,
  FormLabel,
  Radio,
  RadioGroup,
} from "@material-ui/core";
import React from "react";

const FORMradio = () => {
  return (
    <div>
      <FormControl style={{ margin: "40px" }} error>
        <FormLabel>Gender</FormLabel>
        <RadioGroup defaultValue="female" row>
          <FormControlLabel control={<Radio />} label="male" value="male" />
          <FormControlLabel control={<Radio />} label="female" value="female" />
          <FormControlLabel control={<Radio />} label="other" value="other" />
        </RadioGroup>
        <FormHelperText>Invaild selection</FormHelperText>
      </FormControl>
    </div>
  );
};

export default FORMradio;
