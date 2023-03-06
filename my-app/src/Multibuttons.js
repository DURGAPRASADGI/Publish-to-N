import React from "react";
import { Button, ButtonGroup, IconButton } from "@material-ui/core";
import { Stack } from "@mui/material";
import { SendSharp } from "@mui/icons-material";

const Multibuttons = () => {
  return (
    <div>
      <Stack spacing={10} direction={"row"}>
        <Button variant="contained">contained</Button>
        <Button variant="text">submit</Button>
        <Button variant="outlined">outlined</Button>
      </Stack>
      <Stack display="block" spacing={4} direction={"row"}>
        <Button variant="contained">reset</Button>
        <Button variant="contained">login</Button>
        <Button variant="contained">sigin</Button>
      </Stack>
      <Stack spacing={4} direction={"row"}>
        <Button variant="contained" startIcon={<SendSharp />} disableRipple>
          {" "}
          send
        </Button>
        <Button variant="contained" color="primary" endIcon={<SendSharp />}>
          reset
        </Button>
      </Stack>
      <Stack spacing={4} direction={"row"}>
        <Button variant="contained" size="large">
          large
        </Button>
        <Button variant="contained" size="medium">
          {" "}
          medium
        </Button>
        <Button variant="contained" size="small">
          {" "}
          small
        </Button>
      </Stack>
      <IconButton color="primary">
        <SendSharp />
      </IconButton>
      /*ButtonGroup */
      <ButtonGroup>
        <Button variant="contained">left</Button>
        <Button variant="contained">right</Button>
        <Button variant="contained">top</Button>
      </ButtonGroup>
      <ButtonGroup variant="outlined">
        <Button>left</Button>
        <Button>right</Button>
        <Button>top</Button>
      </ButtonGroup>
    </div>
  );
};

export default Multibuttons;
