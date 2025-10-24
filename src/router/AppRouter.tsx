import {Route, BrowserRouter as Router, Routes} from "react-router-dom";
import Layout from "../Layout.tsx";
import Home from "../components/pages/Home.tsx";

const AppRouter = () => {
    return (
        <Router>
            <Routes>
                <Route element={<Layout />}>
                    <Route path="/" element={<Home/>} />
                </Route>
            </Routes>
        </Router>
    );
};

export default AppRouter;
