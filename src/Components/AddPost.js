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
    const [img, setImg] = React.useState(null);
    const [name, setName] = React.useState(null);
    const [link, setLink] = React.useState(null);
    const [snap, setSnap] = React.useState(null);
    const [review1, setReview1] = React.useState(null);
    const [review2, setReview2] = React.useState(null);
    const [review3, setReview3] = React.useState(null);

    const add =(event)=>{
        event.preventDefault();

        console.log({img,name,link,snap,review1,review2,review3})
    }
    
    const classes = useStyles();
    return (
        <form onSubmit={add} className={classes.root} noValidate autoComplete="off">
            <h3 style={{textAlign: 'center'}}>Publish Post</h3>

            <div className={classes.divStyle}>

                <TextField id="filled-basic"
                           variant="outlined"
                           type="file"
                           placeholder="Book Image"
                           fullWidth
                           onChange={(event)=>setImg(event.target.value)}
                           />
            </div>


            <div className={classes.divStyle}>

                <TextField id="filled-basic"
                           variant="filled"
                           label="Name"
                           placeholder="Book Name"
                           fullWidth
                           onChange={(event)=>setName(event.target.value)}
                           />
            </div>
            <div className={classes.divStyle}>
                <TextField id="filled-basic"
                           variant="filled"
                           label="Snapshot"
                           placeholder="Book Snapshot"
                           fullWidth
                           onChange={(event)=>setSnap(event.target.value)}
                           />
            </div>
            <div className={classes.divStyle}>
                <TextField id="filled-basic"
                           variant="filled"
                           label="Link"
                           placeholder="Book Link"
                           fullWidth
                           onChange={(event)=>setLink(event.target.value)}
                           />
            </div>


            <div className={classes.divStyle}>
                <TextField
                    id="outlined-multiline-static"
                    label="Review 1"
                    multiline
                    rows={4}
                    variant="outlined"
                    fullWidth
                    onChange={(event)=>setReview1(event.target.value)}

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
                    onChange={(event)=>setReview2(event.target.value)}


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
                    onChange={(event)=>setReview3(event.target.value)}

                />
            </div>

            <ButtonGroup disableElevation variant="contained" color="primary">
                <Button type='submit' size="large" variant="outlined">Publish</Button>
            </ButtonGroup>
        </form>
    );
}
export default AddPost;
