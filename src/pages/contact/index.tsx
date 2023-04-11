import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import { navItems } from '../index';
import * as React from 'react';


const Contact = () => {
    return (
        <div>
            <Navbar items={navItems}/>
            <Footer/> 
        </div>
    );
};


export default Contact;
