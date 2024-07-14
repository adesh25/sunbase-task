import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import SignIn from './Components/User/SignIn';
import SignUp from './Components/User/SignUp';
import CustomerForm from './Components/Customers/CustomerForm';
import CustomerList from './Components/Customers/CustomerList';
import Home from './Home';

const Main = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<SignIn />} />
                <Route path="/signup" element={<SignUp />} />
                <Route path="/home" element={<Home />} />
                <Route path="/add" element={<CustomerForm />} />
                <Route path="/list" element={<CustomerList/>}/>
            </Routes>
        </BrowserRouter>
    );
};

export default Main;
