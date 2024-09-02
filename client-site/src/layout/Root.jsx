import React from 'react';
import { Outlet } from 'react-router-dom';
import Nav from '../shared/Nav';
import Footer from '../shared/Footer';
import { FaWhatsapp } from 'react-icons/fa';

const Root = () => {
    return (
        <div>
            <Nav></Nav>
            <Outlet></Outlet>
            <a href=" https://wa.me/+8801793734161?text=Hi lipi" target="_blank" className="fixed bottom-6 right-6 z-50 hover:scale-105 hover:transition">
                            <i className="text-green-500 text-5xl lg:text-7xl cursor-pointer"><FaWhatsapp /></i>
                        </a>
            <Footer></Footer>
        </div>
    );
};

export default Root;