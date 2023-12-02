import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import HomeScreen from "./screens/HomeScreen.jsx"
import LoginScreen from './screens/LoginScreen.jsx'
import RegisterScreen from './screens/RegisterScreen.jsx';
import ProfileScreen from './screens/ProfileScreen.jsx';
import PrivateRoute from "./components/PrivateRoute.jsx";
import Users from "./screens/Users.jsx";
import CreateUser from "./screens/CreateUser.jsx";
import UpdateUser from "./screens/UpdateUser.jsx";
import store from "./store.js";
import { Provider } from "react-redux";
import "bootstrap/dist/css/bootstrap.min.css"
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from "react-router-dom";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={ <App /> }>
      <Route index={true} path="/" element={ <HomeScreen /> } />
      <Route path="/login" element={<LoginScreen />} />
      <Route path="/register" element={<RegisterScreen />} />
      <Route path="" element={ <PrivateRoute /> }>
        <Route path="/profile" element={ <ProfileScreen /> } />
      </Route>
      <Route path='/users' element={<Users />}></Route>
      <Route path='/create' element={<CreateUser />}></Route>
      <Route path='/update/:id' element={<UpdateUser />}></Route>
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById('root')).render(

  <Provider store={store}>
  <React.StrictMode>
    <RouterProvider router={ router } />
  </React.StrictMode>
  </Provider>
)
