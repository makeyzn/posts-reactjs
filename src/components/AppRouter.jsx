import React, { useContext } from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { AuthContext } from "../context";
import {privateRoutes, publicRoutes, routes} from "../router";
import Loader from "./UI/Loader/Loader";

const AppRouter = () => {
    const {isAuth, isLoading} = useContext(AuthContext);
    console.log(isAuth)

    if (isLoading) {
        return <Loader />
    }
    return (
        isAuth
            ? 
            <Routes>
                {privateRoutes.map(route =>
                    <Route element={route.element} path={route.path} exact={route.exact} key={route.path}/>
                )}
            </Routes>
            :
            <Routes>
                {publicRoutes.map(route =>
                    <Route element={route.element} path={route.path} exact={route.exact} key={route.path}/>
                )}
            </Routes>

    )
}

export default AppRouter;