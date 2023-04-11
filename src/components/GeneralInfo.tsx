const GeneralInfo = () => {
    return (
        <div className='flex border border-blue-600 rounded-lg p-2' style={{width: "30rem"}}>
            <div>
                <div className="text-3xl p-1 text-center text-blue-600">
                    Short info about me:
                </div>
                <div className="flex text-purple-800 p-3 text-xl">
                    I am a student at the Warsaw University Technology.
                    Since childhood I have always dreamt of having the know-how on how computers work and how software we use everyday is created.
                    I am currently learning web development and technologies associated with code deployment.
                </div>
            </div>
        </div>
    )
}

export default GeneralInfo;
