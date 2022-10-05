import React from "react";
import { Container} from "@material-ui/core";
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Home/Home";
import Auth from "./components/Auth/Auth";
import PostDetails from "./components/PostDetail/PostDetails";


const App = () => {
    const user = JSON.parse(localStorage.getItem('profile'));

    return (
        <BrowserRouter>
            <Container>
                <Navbar/>
                <Routes>
                    <Route path='/' element={<Home/>}/>
                    <Route path='/search' element={<Home/>}></Route>
                    <Route path='/details/:id' element={<PostDetails/>} />
                    <Route path='/auth' element={user ? <Navigate replace to="/" /> : <Auth/>}/>
                </Routes>  
            </Container>
        </BrowserRouter>
    )
}

export default App;