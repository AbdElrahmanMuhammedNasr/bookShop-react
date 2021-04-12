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
        borderRadius: '10px',
        textAlign:'center'

    },

    imgHome: {
        height: '25vh',


    }
}))

const FavoriteBook = () => {
    const classes = useStyles();
    const [books, setBooks] = React.useState([1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 11, 1, 1, 1, 1, 1, 1, 1]);


    return (
        <>
            <Container maxWidth="lg" className={classes.containerStyle}>
                <img src={logo} className={classes.imgHome}/>
            </Container>
            <br></br>
            <br></br>
            <br></br>
            <div
                className="d-flex justify-content-center row row-cols-1 row-cols-lg-4 row-cols-md-3 row-cols-sm-12  g-4">
                {
                    books.map(b => {
                        return (
                            <section className="col  d-flex justify-content-center">
                                <Book/>
                            </section>
                        );
                    })
                }


            </div>
        </>
    )
}
export default FavoriteBook
