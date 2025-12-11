import "./components/todo/todo.css";
import Header from "./components/layout/header.jsx";
import { Outlet } from "react-router-dom";

const App = () => {
  
    return (
        <>
            <Header />
            <Outlet />
        </>
    );
};

export default App;
