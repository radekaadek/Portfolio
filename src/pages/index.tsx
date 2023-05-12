import GeneralInfo from '@/components/GeneralInfo';
import HobbiesList from '@/components/HobbiesList';
import AnimeBackground from '@/components/AnimeBackground';
import ProgrammingLangs from '@/components/ProgrammingLangs';
import OtherTools from '@/components/OtherTechnologies';
import Head from 'next/head';
import * as React from 'react';
import Layout from '@/components/Layout';
import { FaMagento } from 'react-icons/fa';
import Familiada from '@/components/Familiada';


const Home = () => {
    return (
        <Layout>
            <Head>
                <title>About me</title>
                <meta name="description" content="About me page" />
            </Head>
            <AnimeBackground/>
            <div className="justify-center p-5">
                <h1 className="text-4xl font-bold text-center p-4 text-purple-600 animate-bounce">About me 🤗</h1>
                <div className="flex flex-wrap justify-around">
                    <GeneralInfo/>
                    <HobbiesList/>
                    <ProgrammingLangs/>
                    <OtherTools/>
                </div>
            </div>
            <div className="w-full" style={{backgroundColor: "#3399ff", height: "6vh"}}></div>
            <h1 className="text-4xl font-bold text-center p-4 text-purple-600 h-fit">My personal projects 📝</h1>
            {/* a big familiada in the center */}
            <Familiada/>
        </Layout>
    );
};


export default Home;
