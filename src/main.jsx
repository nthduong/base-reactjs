import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import LoginPage from "./page/login.jsx"
import RegisterPage from "./page/register.jsx";
import UsersPage from "./page/users.jsx";
import BookPage from "./page/book.jsx";
import TodoApp from "./components/todo/TodoApp.jsx";
import ErrorPage from "./page/error.jsx";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        errorElement: <ErrorPage />,
        children: [
            { index: true, element: <TodoApp /> },
            {
                path: "/users",
                element: <UsersPage />,
            },
            {
                path: "/book",
                element: <BookPage />,
            },
        ],
    },
    {
        path: "/login",
        element: <LoginPage />,
    },
    {
        path: "/register",
        element: <RegisterPage />,
    },
]);

createRoot(document.getElementById("root")).render(
    // <StrictMode>
        <RouterProvider router={router} />
    // </StrictMode>
);
