const GeneralInfo = () => {
    return (
        <div className='flex border border-blue-600 rounded-lg p-2 my-4' style={{width: "min(30rem, 90vw)", backgroundColor: "#001e3c"}}>
            <div>
                <div className="text-3xl p-1 text-center text-blue-600">
                    Short info about me:
                </div>
                <div className="flex p-3 text-xl" style={{color: "#f3f6f9"}}>
                    I am a student at the Warsaw University Technology.
                    Since childhood I have always dreamt of having the know-how on how computers work and how software we use everyday is created.
                    I am currently learning web development and technologies associated with code deployment.
                </div>
            </div>
        </div>
    )
}

export default GeneralInfo;
