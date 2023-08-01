import {useState} from 'react';

import SideBar from './sideBar.js';
import '../CSS/sideBarCss.css';


import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Paper  from "@mui/material/Paper";


function Indicator_Registration(params){

    const [name, setName] = useState('');

        const handleSubmit = (e) => {

            event.preventDefault()

                    setEmailError(false)
                    setPasswordError(false)

                    if (email == '') {
                        setEmailError(true)
                    }
                    if (password == '') {
                        setPasswordError(true)
                    }

                    if (email && password) {
                        fetch("https://pointy-gauge.glitch.me/api/form", {
                              method: "POST",
                              body: JSON.stringify(data),
                              headers: {
                                "Content-Type": "application/json"
                              }
                            })
                              .then(response => response.json())
                              .then(response => console.log("Success:", JSON.stringify(response)))
                              .catch(error => console.error("Error:", error));
                    }

        }

     return (
        <body>
            <div class="main">
               <SideBar/>

                <div class="container">
                <form autoComplete="off" onSubmit={handleSubmit}>
                    <h2>Trust Indicator Registration</h2>
                    <br/>
                    <Box
                          component="form"
                          sx={{
                            '& .MuiTextField-root': { m: 1, width: '25ch' },
                          }}
                          noValidate
                          autoComplete="off"
                        >

                            <TextField
                              required
                              id="outlined-required"

                              label="Category"
                              defaultValue="abc"

                              fullWidth
                            />

                            <TextField
                                                          required
                                                          id="outlined-required"

                                                          label="Sub-Category"
                                                          defaultValue="abcs"
                                                          fullWidth
                                                        />

                            <TextField
                              id="outlined-number"
                              label="Minimum Incator Value"
                              type="number"
                              InputLabelProps={{
                                shrink: true,
                              }}
                            />

                             <TextField
                                                          id="outlined-number"
                                                          label="Maximum Incator Value"
                                                          type="number"
                                                          InputLabelProps={{
                                                            shrink: true,
                                                          }}
                                                        />




                        </Box>
                        <Button variant="outlined" color="secondary" type="submit">Register Indicator</Button>
                        </form>
                </div>
            </div>
        </body>

        );
}


export default Indicator_Registration;