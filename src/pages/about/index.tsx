import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import HobbiesList from '../../components/HobbiesList';
import GeneralInfo from '../../components/GeneralInfo';
import ProgrammingLangs from '@/components/ProgrammingLangs';
import * as React from 'react';


const About = () => {
    return (
        <div>
            <Navbar/>
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


export default About;
