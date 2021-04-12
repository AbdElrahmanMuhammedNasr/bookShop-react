import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
// import book from '../assest/bookImg.png'
import book from '../assest/bookimg2.jpg'

import img from '../assest/3.jpeg';
import ThumbUpIcon from '@material-ui/icons/ThumbUp';
import ThumbDownIcon from '@material-ui/icons/ThumbDown';
import BookmarkBorderIcon from '@material-ui/icons/BookmarkBorder';
import {Chip} from "@material-ui/core";
import {NavLink} from "react-router-dom";

const useStyles = makeStyles((theme) => ({
    root: {
        maxWidth: 345,
        boxShadow: '0px 0px 10px gray',
        borderRadius: '6px',
    },
    media: {
        height: 0,
        paddingTop: '56.25%', // 16:9
    },


}));

const Book = () => {
    const classes = useStyles();

    return (
        <Card className={classes.root}>
            <CardHeader className="float-left"
                        avatar={
                            <Avatar alt="Remy Sharp" src={img}></Avatar>

                        }
                        action={
                            <IconButton aria-label="share">
                                <BookmarkBorderIcon/>
                            </IconButton>
                        }

                        title="Tamer Ali"
                        subheader="September 14, 2016"
            />
            <CardMedia
                className={classes.media}
                image={book}
                title="Paella dish"
            />
            <CardContent>

                <Typography gutterBottom variant="h5" component="h2">
                    Lizard Book
                </Typography>

                <Typography variant="body2" color="textSecondary" component="p">
                    This impressive paella is a perfect party dish and a fun meal to cook together with your
                    guests. Add 1 cup of frozen peas along with the mussels, if you like.
                </Typography>

                <NavLink to="/homo">
                    to Book
                </NavLink>

            </CardContent>
            <CardActions disableSpacing className="d-flex justify-content-between">

                <IconButton aria-label="add to favorites">
                    <Chip size="small" label="12002" color="primary" className="m-2"/>
                    <ThumbUpIcon fontSize="small"/>
                </IconButton>

                <IconButton aria-label="share">
                    <Chip size="small" label="12" className="m-2"/>
                    <ThumbDownIcon fontSize="small"/>
                </IconButton>


            </CardActions>
        </Card>
    );
}
export default Book;
