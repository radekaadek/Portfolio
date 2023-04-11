import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import { navItems } from '../index';
import HobbiesList from '../../components/HobbiesList';
import GeneralInfo from '../../components/GeneralInfo';
import ProgrammingLangs from '@/components/ProgrammingLangs';
import * as React from 'react';


const About = () => {
    return (
        <div>
            <Navbar items={navItems}/>
            <div className="justify-center p-5 flex-col">
                <h1 className="text-4xl font-bold text-center p-4 text-purple-600">About me 🤗</h1>
                <div className="flex-row flex-wrap">
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
