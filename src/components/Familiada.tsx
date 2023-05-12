import Image from "next/image";
import Link from "next/link";

const Familiada = () => {
    return (
        <div>
            <div className="text-4xl p-1 text-center text-blue-600">
                Familiada
            </div>
            {/* make the text span 3/4 of the screen */}
            <div className="flex flex-row justify-center items-center">
                <div className="max-w-xl text-center my-3">
                    <div className=" border-blue-600 border my-2 p-3">
                        <span className="p-3 text-xl text-center" style={{color: "#f3f6f9"}}>
                            A desktop app created with my friend
                        </span>
                        <Link href="https://github.com/xKRISTOFx">
                            <span className="text-xl text-center text-blue-500">
                                xKRISTOFx
                            </span>
                        </Link>
                        <span className="p-3 text-xl text-center" style={{color: "#f3f6f9"}}>
                            that creates an interface for conducting the polish TV show &quot;Familiada&quot; in Python using Pygame and the Tkinter library.
                        </span>
                    </div>
                    <Image src="/family.png" alt="familiada" width="1000" height="625" className="mx-auto"/>
                <Image src="/pygame_powered.png" alt="pygame powered" width="200" height="100" className="ml-auto"/>
                </div>
            </div>
        </div>
    )
}

export default Familiada;
