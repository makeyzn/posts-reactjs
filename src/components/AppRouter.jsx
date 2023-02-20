import React from "react";
import { Route, Routes } from "react-router-dom";
import Posts from "../pages/Posts";
import About from "../pages/About";
import Error from "../pages/Error";

const AppRouter = () => {
    return (
        <Routes>
            <Route path="/about" element={<About />} />
            <Route path="/posts" element={<Posts />} />
            <Route path="/*" element={<Error />} />
            {/* <Route path="/*" element={<Navigate to="/error" replace />} /> */}
        </Routes>
    )
}

export default AppRouter;