import React from 'react';
import Navbar from './Navbar';

export default function Header({ currentPage, pageChange }) {

    return (
        <div>
            <h1>Nolan Spence</h1>
            <Navbar currentPage={currentPage} pageChange={pageChange}/>
        </div>
    )
};