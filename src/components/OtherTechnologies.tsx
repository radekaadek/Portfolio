import { otherTools } from "@/data";

const OtherTools = () => {
    return (
        <div className=' my-4 flex-col border border-blue-600 rounded-lg p-2' style={{width: "min(27rem, 90vw)", backgroundColor: "#001e3c"}}>
            <div className="text-3xl text-center p-1 b-3 text-blue-600">
                Other tools I use:
            </div>
            <div className="flex justify-center p-5">
                <ul className="list-disc list-inside p-3 w-fit">
                    {otherTools.map((hobby) => (
                            <span className='flex text-2xl' style={{color: "#f3f6f9"}} key={hobby.id}>
                                <div className="mr-10">{hobby.title}</div>
                                <div className="ml-auto">{hobby.img}</div>
                            </span>
                    ))}
                </ul>
            </div>
        </div>
    )
}

export default OtherTools;
