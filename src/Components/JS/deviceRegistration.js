import TextField from "@mui/material/TextField";
import React, { useState } from "react";
import { Button, Paper } from "@mui/material";


import SideBar from './sideBar.js';
import '../CSS/sideBarCss.css';

export const FormWithoutHookForm = () => {
  const [textValue, setTextValue] = useState("");

  const onTextChange = (e: any) => setTextValue(e.target.value);
  const handleSubmit = () => console.log(textValue);
  const handleReset = () => setTextValue("");

  return (

  <body>
              <div class="main">

    <Paper>
      <h2>Trust Indicator Registration</h2>

      <TextField
        onChange={onTextChange}
        value={textValue}
        label={"Text Value"} //optional
      />

      <Button onClick={handleSubmit}>Submit</Button>
      <Button onClick={handleReset}>Reset</Button>
    </Paper>

    </div>
            </body>
  );
};