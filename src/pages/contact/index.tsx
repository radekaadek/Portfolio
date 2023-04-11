import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import Head from 'next/head';
import * as React from 'react';


const Contact = () => {
    return (
        <div>
            <Head>
                <title>Contact me</title>
                <meta name="description" content="Contact me page" />
            </Head>
            <Navbar/>
            <Footer/> 
        </div>
    );
};


export default Contact;
