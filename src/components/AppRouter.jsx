import React from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import {privateRoutes, publicRoutes, routes} from "../router";

const AppRouter = () => {
    const isAuth = false;
    return (
        isAuth
            ? 
            <Routes>
                {privateRoutes.map(route =>
                    <Route element={route.element} path={route.path} exact={route.exact}/>
                )}
            </Routes>
            :
            <Routes>
                {publicRoutes.map(route =>
                    <Route element={route.element} path={route.path} exact={route.exact}/>
                )}
            </Routes>

    )
}

export default AppRouter;