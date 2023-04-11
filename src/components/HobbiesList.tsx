import React from 'react';
import { hobbies } from '../data';

const HobbiesList: React.FC = () => {
    return (
        <div className='flex-col border border-blue-600 rounded-lg p-2' style={{width: "27rem"}}>
            <div className="text-3xl text-center p-1 b-3 text-blue-600">
                My hobbies include:
            </div>
            <div className="flex justify-center p-5">
                <ul className="list-disc list-inside p-3">
                    {hobbies.map((hobby) => (
                        <li key={hobby.id} className='text-2xl text-purple-800'>{hobby.title}</li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default HobbiesList;
