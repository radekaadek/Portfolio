import Footer from '@/components/Footer';
import GeneralInfo from '@/components/GeneralInfo';
import HobbiesList from '@/components/HobbiesList';
import Navbar from '@/components/Navbar';
import AnimeBackground from '@/components/AnimeBackground';
import ProgrammingLangs from '@/components/ProgrammingLangs';
import Head from 'next/head';
import * as React from 'react';


const Home = () => {
    return (
        <div>
            <Head>
                <title>About me</title>
                <meta name="description" content="About me page" />
            </Head>
            <Navbar/>
            <AnimeBackground/>
            <div className="justify-center p-5">
                <h1 className="text-4xl font-bold text-center p-4 text-purple-600">About me 🤗</h1>
                <div className="flex flex-wrap justify-around">
                    <GeneralInfo/>
                    <HobbiesList/>
                    <ProgrammingLangs/>
                </div>
            </div>
            <Footer/> 
        </div>
    );
};


export default Home;
