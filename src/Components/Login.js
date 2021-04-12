import {makeStyles} from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import React from "react";
import {Button, ButtonGroup} from "@material-ui/core";
import {NavLink, useHistory} from "react-router-dom";

const useStyles = makeStyles((theme) => ({
    root: {
        width: '40%',
        margin: '5% auto',
        boxShadow: '0px 0px 10px gray',
        borderRadius: '6px',
        padding: '20px',
        textAlign: 'center'

    },
    divStyle: {
        margin: '25px 20px'
    }
}));
const Login = () => {
    const classes = useStyles();
    let history = useHistory();

    const loginUser = (event) => {
        event.preventDefault();
        history.push('/home')
    }
    return (
        <form onSubmit={loginUser} className={classes.root} noValidate autoComplete="off">
            <h3>Login</h3>


            <div className={classes.divStyle}>

                <TextField id="filled-basic"
                           variant="filled"
                           label="Email"
                           placeholder="Email"
                           fullWidth/>
            </div>

            <div className={classes.divStyle}>
                <TextField id="filled-basic"
                           variant="filled"
                           type="password"
                           label="Password"
                           placeholder="Password"
                           fullWidth/>
            </div>
            <ButtonGroup disableElevation variant="contained" color="primary">
                <Button size="large">Login</Button>
            </ButtonGroup>
            <br></br>
            <br></br>
            <NavLink to="/signup">
                signup
            </NavLink>
        </form>

    )
}
export default Login
