import React from 'react';
import Navbar from '../Navbar';
import './style.css';

export default function Header({ currentPage, pageChange }) {

    return (
        <div className='container header'>
            <h1>Nolan Spence</h1>
            <Navbar currentPage={currentPage} pageChange={pageChange}/>
        </div>
    )
};