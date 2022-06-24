import { React, Component } from 'react'

import { Box, TextField, Button } from '@mui/material';



class InputTask extends Component{
    constructor(props){
        super(props)
        this.state = {
            value: ''
        }
    }

    addTask = () => {
        if(this.state.value){
            this.props.addTask(this.state.value)
            this.setState({value: ''})
        }
    }

    valueChange = e => {
        this.setState({value: e.target.value})
    }

    render(){
        return(
            <Box
                component="div"
                sx={{
                    width: "300px",
                    height: "10rem",
                    borderRadius: "12px",
                    position: "absolute",
                    left: "35%",
                    top: "35%",
                    backgroundColor: "#F4AAB9",
                    zIndex: "1",
                }}
                noValidate
                autoComplete="off">
                <TextField onChange={this.valueChange} value={this.state.value} sx={{marginTop: "30px", marginLeft: "40px"}} id="outlined-basic" label="Task" variant="outlined" />
                <Button onClick={() => this.addTask()} sx={{marginTop: "10px", marginLeft: "100px"}} variant="outlined" size="medium">
                    Add Task
                </Button>
            </Box>
        )
    }

}

export default InputTask