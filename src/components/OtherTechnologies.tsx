import { otherTools } from "@/data";

const OtherTools = () => {
    return (
        <div className=' my-4 flex-col border border-blue-600 rounded-lg p-2' style={{width: "min(27rem, 90vw)", backgroundColor: "#001e3c"}}>
            <div className="text-3xl text-center p-1 b-3 text-blue-600">
                Other tools I use:
            </div>
            <div className="flex justify-center p-5">
                <ul className="list-disc list-inside p-3 w-fit">
                    <span className='flex text-2xl' style={{color: "#f3f6f9"}} key={1}>
                        <div className="mr-10">Neovim</div>
                        <img src="https://upload.wikimedia.org/wikipedia/commons/3/3a/Neovim-mark.svg" className="ml-auto" style={{width: "24px", height: "24px", alignSelf: "center"}}></img>
                    </span>
                    {otherTools.map((hobby) => (
                            <span className='flex text-2xl' style={{color: "#f3f6f9"}} key={hobby.id}>
                                <div className="mr-10">{hobby.title}</div>
                                <div className="ml-auto" style={{alignSelf: "center"}}>{hobby.img}</div>
                            </span>
                    ))}
                </ul>
            </div>
        </div>
    )
}

export default OtherTools;
