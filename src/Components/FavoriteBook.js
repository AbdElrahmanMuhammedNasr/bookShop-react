import {Container} from "@material-ui/core";
import logo from "../assest/favo.svg";
import React from "react";
import {makeStyles} from "@material-ui/core/styles";
import Book from "../UI/Book";


const useStyles = makeStyles((theme) => ({

    containerStyle: {
        backgroundColor: '#f3e6dd',
        height: '25vh',
        margin: '10px auto',
        borderRadius: '10px'
    },

    imgHome: {
        height: '25vh',

    }
}))

const BestBook = () => {
    const classes = useStyles();

    return (
        <>
            <Container maxWidth="lg" className={classes.containerStyle}>

                <img src={logo} className={classes.imgHome}/>

            </Container>
            <br></br>
            <section className="row">
                <Book className="col-sm-4"/>
                <Book className="col-sm-4"/>
                <Book className="col-sm-4"/>
                <Book className="col-sm-4"/>

            </section>
        </>
    )
}
export default BestBook
