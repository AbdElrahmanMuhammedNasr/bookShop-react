import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import {red} from '@material-ui/core/colors';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import img from '../assest/bookimg2.jpg'
import {makeStyles} from '@material-ui/core/styles';
import React from "react";
import {Chip, Menu, MenuItem} from "@material-ui/core";
import ThumbUpIcon from "@material-ui/icons/ThumbUp";
import ThumbDownIcon from "@material-ui/icons/ThumbDown";
import {NavLink} from "react-router-dom";
import CommentIcon from '@material-ui/icons/Comment';
import {Alert, AlertTitle} from "@material-ui/lab";

const useStyles = makeStyles((theme) => ({
    root: {
        margin: '20px auto',
        boxShadow: '0px 0px 10px gray',
        borderRadius: '6px',
    },
    media: {
        height: 0,
        paddingTop: '56.25%', // 16:9
    },
    expand: {
        transform: 'rotate(0deg)',
        marginLeft: 'auto',
        transition: theme.transitions.create('transform', {
            duration: theme.transitions.duration.shortest,
        }),
    },
    expandOpen: {
        transform: 'rotate(180deg)',
    },
    avatar: {
        backgroundColor: red[500],
    },

}));
const Post = () => {
    const classes = useStyles();
    const [expanded, setExpanded] = React.useState(false);
    const [comment, setComment] = React.useState(false);

    const [anchorEl, setAnchorEl] = React.useState(null);

    const [commentsData, setCommentsData] = React.useState([1, 1, 1,1, 1, 1, 1, 1,])

    const handleExpandClick = () => {
        setExpanded(!expanded);
        setComment(false);

    };

    // details
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    // details
    const handleClose = () => {
        setAnchorEl(null);
    };

    //--------------------------
    const CommentClick = () => {
        setComment(!comment);
        setExpanded(false);

    };


    return (
        <Card className={classes.root}>


            <CardHeader
                avatar={
                    <Avatar alt="Remy Sharp" src={img}></Avatar>

                }
                action={

                    <IconButton aria-label="settings">
                        <MoreVertIcon onClick={handleClick}/>
                    <Menu
                        id="simple-menu"
                        anchorEl={anchorEl}
                        keepMounted
                        open={Boolean(anchorEl)}
                        onClose={handleClose}
                        >
                            <MenuItem onClick={handleClose}>Report</MenuItem>
                    </Menu>
                    </IconButton>
                }
                title="Shrimp and Chorizo Paella"
                subheader="September 14, 2016"
            />
            <CardMedia
                className={classes.media}
                image={img}
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

                <NavLink to="/home" title="go to book website">To Book</NavLink>

            </CardContent>

            <CardActions disableSpacing>

                <IconButton aria-label="add to favorites">
                    <Chip size="small" label="120" color="primary" className="m-2"/>
                    <ThumbUpIcon fontSize="small"/>
                </IconButton>

                <IconButton aria-label="share">
                    <Chip size="small" label="12" className="m-2"/>
                    <ThumbDownIcon fontSize="small"/>
                </IconButton>


                <IconButton
                    onClick={CommentClick}
                    aria-expanded={comment}
                    aria-label="show more"
                >
                    <CommentIcon titleAccess="Show Comments"/>
                </IconButton>

                {/* end first icons*/}
                <IconButton
                    className={clsx(classes.expand, {
                        [classes.expandOpen]: expanded,
                    })}
                    onClick={handleExpandClick}
                    aria-expanded={expanded}
                    aria-label="show more"
                >
                    <ExpandMoreIcon titleAccess="Show details"/>
                </IconButton>
            </CardActions>

            <Collapse in={expanded} timeout="auto" unmountOnExit>
                <CardContent>
                    <Typography paragraph><strong>Review</strong></Typography>

                    <Typography paragraph>
                        Heat 1/2 cup of the broth in a pot until simmering, add saffron and set aside for 10
                        minutes.
                    </Typography>

                    <Typography paragraph>
                        Heat oil in a (14- to 16-inch) paella pan or a large, deep skillet over medium-high
                        heat. Add chicken, shrimp and chorizo, and cook, stirring occasionally until lightly
                        browned, 6 to 8 minutes. Transfer shrimp to a large plate and set aside, leaving chicken
                        and chorizo in the pan. Add pimentón, bay leaves, garlic, tomatoes, onion, salt and
                        pepper, and cook, stirring often until thickened and fragrant, about 10 minutes. Add
                        saffron broth and remaining 4 1/2 cups chicken broth; bring to a boil.
                    </Typography>

                    <Typography paragraph>
                        Add rice and stir very gently to distribute. Top with artichokes and peppers, and cook
                        without stirring, until most of the liquid is absorbed, 15 to 18 minutes. Reduce heat to
                        medium-low, add reserved shrimp and mussels, tucking them down into the rice, and cook
                        again without stirring, until mussels have opened and rice is just tender, 5 to 7
                        minutes more. (Discard any mussels that don’t open.)
                    </Typography>

                    <Typography>
                        Set aside off of the heat to let rest for 10 minutes, and then serve.
                    </Typography>

                </CardContent>

            </Collapse>

            {/* Comments */}

            <Collapse in={comment} timeout="auto" unmountOnExit>
                <CardContent>
                    <Typography paragraph><strong>Comment</strong></Typography>

                    <div className="input-group mb-3">
                        <input type="text" className="form-control" placeholder="Comment..."
                               aria-label="Recipient's username" aria-describedby="basic-addon2"/>
                        <div className="input-group-append">
                            <button className="btn btn-outline-secondary" type="button">Add</button>
                        </div>
                    </div>

                    {
                        commentsData.map(c => {
                            return (
                                <Typography paragraph>
                                    <Alert severity="success" onClose={() => {
                                    }}>
                                        <AlertTitle>Ali - <small>2:30 pm</small> </AlertTitle> This is a Comment
                                    </Alert>
                                </Typography>
                            )
                        })
                    }


                </CardContent>

            </Collapse>

        </Card>
    )
}
export default Post;
