import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import Post from "../UI/Post";
import AddIcon from "@material-ui/icons/Add";
import {Fab} from "@material-ui/core";
import {useHistory} from "react-router-dom";
import Avatar from "@material-ui/core/Avatar";
import img from "../assest/bookimg2.jpg";


const useStyles = makeStyles((theme) => ({

    mainContainer: {
        width: '50%',
        margin: '5px auto',
    },
    profile: {
        position: 'absolute',
        width: '16vw',
        height: "auto",
        boxShadow: '0px 0px 10px gray',
        margin: '5vh 20px',
        borderRadius: '10px',
        padding: '20px',
        textAlign: 'center'
    },
    large: {

        width: '10vw',
        height: '10vw',
    },
}));

const Blog = () => {
    let history = useHistory();
    const classes = useStyles();

    const goAddPost = () => {
            history.push('/addPost')
    }

    return (
        <>
            <div className={classes.profile}>


                <section className="d-flex justify-content-center">
                    <Avatar alt="Remy Sharp" src={img} className={classes.large}></Avatar>
                </section>

                <br></br>
                <strong style={{fontSize: "1.3rem"}}>AbdoElrahman Nasr</strong>

                <br></br>
                <small className="text-muted">Author</small>
                <hr></hr>
                {/*----------------------------*/}
                <small className="text-muted"><strong>Posts</strong> : 122</small>
                <br></br>
                <small className="text-muted"><strong>Books</strong> : 100</small>
                <br></br>
                <small className="text-muted"><strong>Saved</strong> : 100</small>


            </div>

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
        </>
    );
}
export default Blog;
