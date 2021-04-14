import {makeStyles} from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import React from "react";
import {Button, ButtonGroup} from "@material-ui/core";
import {NavLink, useHistory} from "react-router-dom";
import Alert from '@material-ui/lab/Alert';

import axios from 'axios'


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
    const [email , setEmail] = React.useState('');
    const [password , setPassword] = React.useState('');
    const [err , setError] = React.useState(null);

    const classes = useStyles();
    let history = useHistory();

    const loginUser = (event) => {
        event.preventDefault();

        axios.post('auth/login',{email , password})
        .then(r=>{
            localStorage.setItem('token',r.data.token)
            history.push('/home')

        }).catch(err=>{
            console.log(err.data)
            setError('Email or Password incorrect')
            setTimeout(()=>{
                setError(null)
            },2000)

        })

    }
    return (
        <form onSubmit={loginUser} className={classes.root} noValidate autoComplete="off">
            <h3>Login</h3>

            {
                err === null
                 ?<></>
                 :<Alert variant="filled" severity="error">
                     {err}
                </Alert>

            }
            <div className={classes.divStyle}>

                <TextField id="filled-basic"
                           variant="filled"
                           label="Email"
                           type='email'
                           placeholder="Email"
                           fullWidth
                           onChange={(event)=>setEmail(event.target.value)}
                           />
            </div>

            <div className={classes.divStyle}>
                <TextField id="filled-basic"
                           variant="filled"
                           type="password"
                           label="Password"
                           placeholder="Password"
                           fullWidth
                           onChange={(event)=>setPassword(event.target.value)}
                           />
            </div>
            <ButtonGroup disableElevation variant="contained" color="primary">
                <Button type='submit' size="large">Login</Button>
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
