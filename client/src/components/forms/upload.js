import React, { Component, Fragment } from 'react';
import TextField from '@material-ui/core/TextField';
import Fab from '@material-ui/core/Fab';
import NavigationIcon from '@material-ui/icons/Navigation';
import Typography from '@material-ui/core/Typography';
import grey from '@material-ui/core/colors/grey';

class UploadForm extends Component{

    state = {
        pasteData: '',
        url: ''
    }

    handleChange = e => {
        this.setState({[e.target.name]: e.target.value});
    }

    handleSubmit = () => {
        console.log(this.state);
    }

    render(){
        return(
            <Fragment>
                <Typography
                  variant="h4"
                  style={{width:'100%', margin: '1% 0%',textAlign: 'center', color: grey[800]}}
                >
                    Upload Your Paste
                </Typography>
                <form autoComplete="off" style={{width:'80%', margin:'0% 10%'}}>
                    <TextField
                      id="outlined-multiline-static"
                      required
                      label="Add Your Paste"
                      multiline
                      rows="30"
                      name="pasteData"
                      margin="normal"
                      variant="outlined"
                      onChange={this.handleChange}
                      style={{width: '100%'}}
                    />
                    <TextField
                      disabled
                      id="standard-disabled"
                      value="URL: www.example.com/"
                      margin="normal"
                    />
                    <TextField
                      id="standard-name"
                      label="Url"
                      value={this.state.name}
                      name= "url"
                      onChange={this.handleChange}
                      margin="none"
                    />
                    <div style={{marginTop: '2%', textAlign: 'center'}}>
                        <Fab
                          variant="extended"
                          aria-label="Delete"
                          style={{color: grey[50],backgroundColor: grey[800]}}
                          onClick={this.handleSubmit}
                        >
                            <NavigationIcon style={{color: grey[50]}} />
                            Upload
                        </Fab>
                    </div>
                </form>
            </Fragment>
        )
    }
}

export default UploadForm;