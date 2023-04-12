import React from 'react';
import { hobbies } from '../data';

const HobbiesList: React.FC = () => {
    return (
        <div className=' my-4 flex-col border border-blue-600 rounded-lg p-2' style={{width: "min(27rem, 90vw)", backgroundColor: "#001e3c"}}>
            <div className="text-3xl text-center p-1 b-3 text-blue-600">
                My hobbies include:
            </div>
            <div className="flex justify-center p-5">
                <ul className="list-disc list-inside p-3">
                    {hobbies.map((hobby) => (
                        <li key={hobby.id} className='text-2xl' style={{color: "#f3f6f9"}}>{hobby.title}</li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default HobbiesList;
