import Header from "./components/Header";
import { Outlet } from "react-router-dom";
import { Container } from "react-bootstrap";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

import {BrowserRouter, Routes, Route} from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css"

function App() {
  return (
    <>
      <ToastContainer />
      <Header />
      <Container className="my-2">
        <Outlet />
      </Container>


    </>
  )  
}

export default App
