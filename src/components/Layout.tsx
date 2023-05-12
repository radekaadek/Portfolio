import * as React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';


// page layout
const Contact = ({children}: {children: React.ReactNode}) => {
    return (
        <div>
            <Navbar/>
                {children}
                <div style={{height: "6vh"}}/>
            <Footer/> 
        </div>
    );
};


export default Contact;
