import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import Post from "../UI/Post";
import AddIcon from "@material-ui/icons/Add";
import {Fab} from "@material-ui/core";
import {useHistory} from "react-router-dom";


const useStyles = makeStyles((theme) => ({

    mainContainer: {
        width: '50%',
        margin: '5px auto',


    }
}));

const Blog = () => {
    let history = useHistory();
    const classes = useStyles();

    const goAddPost = () => {
            history.push('/addPost')
    }

    return (
        <div className={classes.mainContainer}>

            <Fab color="primary" aria-label="add" title="add post">
                <AddIcon onClick={goAddPost}/>
            </Fab>

            <Post/>
            <Post/>
            <Post/>
            <Post/>
            <Post/>
            <Post/>
            <Post/>

        </div>

    );
}
export default Blog;
