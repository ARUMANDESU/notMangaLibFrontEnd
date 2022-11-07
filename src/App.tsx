import React from 'react';
import {Route, Routes} from "react-router-dom";
import PrivateRoute from "./components/PrivateRoute";
import {SignUpPage} from "./pages/SignUpPage";
import {SignInPage} from "./pages/SignInPage";
import HomePage from "./pages/HomePage";
import Navigation from "./components/Navigation";
import UserProfile from './pages/UserPage';

function App() {
    return (
        <>
            <Navigation/>
            <Routes>
                <Route path="/" element={<HomePage/>}/>
                <Route path="/signin" element={<SignInPage/>}/>
                <Route path="/signup" element={<SignUpPage/>}/>
                <Route element={<PrivateRoute redirectTo="/signin"/>}>

                </Route>
                <Route path="/user/:id" element={<UserProfile/>}/>
            </Routes>
        </>
    );
}

export default App;
