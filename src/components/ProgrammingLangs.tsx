import Link from 'next/link';
import { programmingLanguages } from '../data';
import Stars from './Stars';

const Technologies = () => {
    return (
        <div className='flex-col border border-blue-600 rounded-lg p-2' style={{width: "20rem"}}>
            <div className="text-3xl text-center p-1 b-3 text-blue-600">
                My programming languages:
            </div>
            <div className="flex justify-center p-5">
                <ul className="list-disc list-inside p-3">
                    {programmingLanguages.map((language) => (
                        <span key={language.id} className='flex text-2xl text-purple-800'>
                            <Link className="pr-10" href={language.url}>
                                {language.title}
                            </Link>
                            <div className="flex ml-auto" key={language.id}>
                                <Stars key={language.id} amount={language.proficiency} />
                            </div>
                        </span>
                    ))}
                </ul>
            </div>
        </div>
    )
}

export default Technologies;
