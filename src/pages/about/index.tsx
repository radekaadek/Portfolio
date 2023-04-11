import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import { navItems } from '../index';
import HobbiesList from '../../components/HobbiesList';
import Avatar from '@mui/material/Avatar';
import * as React from 'react';
import AnimatedBackground from '@/components/AnimatedBackground';


const About = () => {
    return (
        <div>
            <Navbar items={navItems}/>
            <div className="justify-center p-5 flex-col">
                <h1 className="text-4xl font-bold text-center p-4">About me 🤗</h1>
                    <div className="flex justify-left p-5">
                        <Avatar
                            src="/77837063.jpg"
                            alt="Picture of the author"
                            sx={{ width: 150, height: 150 }}
                        />
                    </div>
                    <div className="flex justify-center p-5 text-2xl">
                        I am a student a the Warsaw University Technology. Since childhood I have always dreamt of having the know-how on how computers work and how software we use everyday is created. I am currently learning web development and technologies associated with code deployment. I have worked with Typescript, Python, C++ and Java.
                    </div>
                    <div className="text-3xl text-center">
                        My hobbies include:
                    </div>
                    <HobbiesList/>
                </div>
            <Footer/> 
        </div>
    );
};


export default About;
