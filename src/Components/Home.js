import {Chip, Container} from "@material-ui/core";
import React from 'react';
import logo from '../assest/book.svg'
import {makeStyles} from "@material-ui/core/styles";

import {NavLink} from "react-router-dom";
import Book from "../UI/Book";


const useStyles = makeStyles((theme) => ({

    containerStyle: {
        backgroundColor: '#f3e6dd',
        height: '50vh',
        margin: '10px auto',
        borderRadius: '10px'
    },
    intro: {
        margin: 'auto',
        // backgroundColor:'red',
        height: '100%',
        float: 'left',
        color: '#423a8d'

    },
    imgHome: {
        position: 'inherit',
        height: '50vh',
        width: '60%',
        float: 'right'
    }
}))
const Home = (props) => {

    const classes = useStyles();


    return (
        <div>



            <Container maxWidth="lg" className={classes.containerStyle}>
                <section className={classes.intro}>
                    <section style={{'margin': '18vh 0px'}}>
                        <h1 style={{'fontSize': '3rem'}}>Build Your library</h1>
                        <Chip className="p-3"
                              size="small"
                              label="read , upload , download books for free"
                              color="primary"
                        />
                        <br></br>
                        <br></br>
                        {/*<ButtonGroup disableElevation variant="contained" color="primary">*/}
                        {/*    <Button size="large">View all</Button>*/}
                        {/*</ButtonGroup>*/}
                    </section>


                </section>
                <img src={logo} className={classes.imgHome}/>


            </Container>

            <br></br>

            <div style={{'width': '95%', 'margin': '40px auto'}}>
                <section className="d-flex justify-content-between">
                    <h3>Best Books</h3>

                    <NavLink to="/bestBook">view all</NavLink>

                </section>

                <br></br>
                <section className="d-flex justify-content-between">
                    <Book/>
                    <Book/>
                    <Book/>
                    <Book/>
                </section>


            </div>

            <div style={{'width': '95%', 'margin': '40px auto'}}>
                <section className="d-flex justify-content-between">
                    <h3>New Books</h3>
                    <NavLink to="/newBook">view all</NavLink>

                </section>

                <br></br>
                <section className="d-flex justify-content-between">
                    <Book/>
                    <Book/>
                    <Book/>
                    <Book/>
                </section>


            </div>


        </div>
    )

}

export default Home;
