import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import {Button, ButtonGroup} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
    root: {
        width: '40%',
        margin: '5% auto',
        boxShadow: '0px 0px 10px gray',
        borderRadius: '6px',
        padding: '20px'

    },
    divStyle: {
        margin: '25px 20px'
    }
}));

const AddPost = () => {
    const classes = useStyles();
    return (
        <form className={classes.root} noValidate autoComplete="off">
            <h3 style={{textAlign: 'center'}}>Publish Post</h3>

            <div className={classes.divStyle}>

                <TextField id="filled-basic"
                           variant="outlined"
                           type="file"
                           placeholder="Book Image"
                           fullWidth/>
            </div>


            <div className={classes.divStyle}>

                <TextField id="filled-basic"
                           variant="filled"
                           label="Name"
                           placeholder="Book Name"
                           fullWidth/>
            </div>
            <div className={classes.divStyle}>
                <TextField id="filled-basic"
                           variant="filled"
                           label="Snapshot"
                           placeholder="Book Snapshot"
                           fullWidth/>
            </div>
            <div className={classes.divStyle}>
                <TextField id="filled-basic"
                           variant="filled"
                           label="Link"
                           placeholder="Book Link"
                           fullWidth/>
            </div>


            <div className={classes.divStyle}>
                <TextField
                    id="outlined-multiline-static"
                    label="Review 1"
                    multiline
                    rows={4}
                    variant="outlined"
                    fullWidth
                />
            </div>

            <div className={classes.divStyle}>
                <TextField
                    id="outlined-multiline-static"
                    label="Review 2"
                    multiline
                    rows={4}
                    variant="outlined"
                    fullWidth

                />
            </div>

            <div className={classes.divStyle}>
                <TextField
                    id="outlined-multiline-static"
                    label="Review 3"
                    multiline
                    rows={4}
                    variant="outlined"
                    fullWidth

                />
            </div>

            <ButtonGroup disableElevation variant="contained" color="primary">
                <Button size="large" variant="outlined">Publish</Button>
            </ButtonGroup>
        </form>
    );
}
export default AddPost;
