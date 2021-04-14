import {makeStyles} from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import React from "react";
import {Button, ButtonGroup, FormHelperText} from "@material-ui/core";
import {NavLink, useHistory} from "react-router-dom";
import  axios  from 'axios';

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
const SignUP = () => {


    const [name , setName] = React.useState('');
    const [email , setEmail] = React.useState('');
    const [password , setPassword] = React.useState('');


    const classes = useStyles();
    let history = useHistory();

    const signUser = (event) => {
        event.preventDefault();


        axios.post('user/addUser',{name,email,password})
            .then(r=>{
                console.log(r)
                history.push('/login')

            }).catch(err=>{
                console.log(err)

            })

    }
    return (
        <form onSubmit={signUser} className={classes.root} noValidate autoComplete="off">
            <h3>SignUp</h3>

   

            <div className={classes.divStyle}>

                <TextField id="filled-basic"
                           type='text'
                           variant="filled"
                           label="Full Name"
                           placeholder="Full name"
                           fullWidth
                           onChange={(event)=>setName(event.target.value)}
                           />
            </div>

            <div className={classes.divStyle}>

                <TextField id="filled-basic"
                           type='email'
                           variant="filled"
                           label="Email"
                           placeholder="Email"
                           fullWidth
                           onChange={(event)=>setEmail(event.target.value)}
                           />
                <FormHelperText id="my-helper-text">We'll never share your email.</FormHelperText>

            </div>

            <div className={classes.divStyle}>
                <TextField id="filled-basic"
                           variant="filled"
                           label="Password"
                           type="password"
                           placeholder="Password"
                           fullWidth
                           onChange={(event)=>setPassword(event.target.value)}
                           />
            </div>
            <ButtonGroup disableElevation variant="contained" color="primary">
                <Button type='submit' size="large">SignUp</Button>
            </ButtonGroup>

            <br></br>
            <br></br>
            <NavLink to="/login">
                login
            </NavLink>
        </form>

    )
}
export default SignUP
