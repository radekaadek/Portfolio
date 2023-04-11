import React from 'react';

const HobbiesList: React.FC = () => {
    return (
        <div className="flex justify-center p-5">
            <ul className="list-disc list-inside bg-gray-800 p-3 border border-red-500">
                <li className='text-re text-2xl'>Programming 💻</li>
                <li className='text-re text-2xl'>Interacting with music 🕺💃</li>
                <li className='text-re text-2xl'>Playing video games 🎮</li>
                <li className='text-re text-2xl'>Cycling 🚴‍♂️</li>
                <li className='text-re text-2xl'>Reading books</li>
            </ul>
        </div>
    );
};

export default HobbiesList;
