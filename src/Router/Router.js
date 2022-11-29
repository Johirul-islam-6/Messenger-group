import { createBrowserRouter } from "react-router-dom";
import ErrorElement from "../Error/ErrorElement";
import Main from "../Main.js/Main";
import Home from "../Messanger-Page/Home";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main />,
        errorElement: <ErrorElement />,
        children: [
            {
                path: '/',
                element: <Home />,
            }
        ]

    }
])

export default router;