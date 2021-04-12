import './App.css';
import Header from "../Components/Header";
import Home from "../Components/Home";
import {Redirect, Route, useHistory} from "react-router-dom";
import Blog from "../Components/Blog";
import {BottomNavigation, BottomNavigationAction} from "@material-ui/core";
import HomeIcon from "@material-ui/icons/Home";
import FavoriteIcon from "@material-ui/icons/Favorite";
import GradeIcon from "@material-ui/icons/Grade";
import AddCircleIcon from "@material-ui/icons/AddCircle";
import AddToQueueIcon from "@material-ui/icons/AddToQueue";
import FiberNewIcon from '@material-ui/icons/FiberNew';
import React from "react";
import AddPost from "../Components/AddPost";
import AddBook from "../Components/AddBook";
import BestBook from "../Components/BestBook";
import FavoriteBook from "../Components/FavoriteBook";
import NewBook from "../Components/NewBook";
import Footer from "../Components/Footer";
import Login from "../Components/Login";
import SignUP from "../Components/SignUp";

function App() {
    let history = useHistory();
    const [value, setValue] = React.useState(0);

    const goTo = (dis) => {
        // console.log(dis)
        history.push('/'+dis);

    }
    return (
        <div className="App">

            <Header/>

            {/*nav bar*/}
            <BottomNavigation style={{'margin': '10px auto'}}
                              value={value}
                              onChange={(event, newValue) => {
                                  setValue(newValue);
                              }}
                              showLabels
            >
                <BottomNavigationAction label="Home" icon={<HomeIcon/>} onClick={()=> goTo('home')}/>
                <BottomNavigationAction label="Favorites" icon={<FavoriteIcon/>} onClick={()=>goTo('favoriteBook')}/>
                <BottomNavigationAction label="Best books" icon={<GradeIcon/>} onClick={() => goTo('bestBook')}/>
                <BottomNavigationAction label="New books" icon={<FiberNewIcon/>}onClick={() => goTo('newBook')}/>
                <BottomNavigationAction label="Add Book" icon={<AddCircleIcon/>} onClick={() => goTo('addBook')}/>
                <BottomNavigationAction label="Blog" icon={<AddToQueueIcon/>} onClick={() => goTo('blog')}/>
            </BottomNavigation>
            {/*end nav bar*/}

            <switch>
                <Redirect exact from={'/'} to={'/home'}/>
                <Route path={'/login'} component={Login}/>
                <Route path={'/signup'} component={SignUP}/>
                <Route path={'/home'} component={Home}/>
                <Route path={'/favoriteBook'} component={FavoriteBook}/>
                <Route path={'/bestBook'} component={BestBook}/>
                <Route path={'/newBook'} component={NewBook}/>

                <Route path={'/addBook'} component={AddBook}/>

                <Route path={'/blog'} component={Blog}/>
                <Route path={'/addPost'} component={AddPost}/>
            </switch>

            <Footer/>

        </div>
    );
}

export default App;
