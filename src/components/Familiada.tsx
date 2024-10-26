import Link from "next/link";
import Project from "./Project";

const Familiada = () => {
    return (
        Project(
            "Familiada",
            [
                {
                    src: "/family.png",
                    alt: "familiada",
                    width: "600",
                    height: "375",
                    className: ""
                },
                {
                    src: "/results.png",
                    alt: "results",
                    width: "600",
                    height: "375",
                    className: ""
                }
            ],
            <div className="w-full">
                <span className="p-3 text-xl text-center" style={{color: "#f3f6f9", paddingRight: "6px"}}>A desktop app created with my friend</span>
                <Link href="github.com/xKRISTOFx" passHref legacyBehavior>
                <span className="text-xl text-center text-blue-500 hover:cursor-pointer">xKRISTOFx</span>
                </Link>
                <span className="p-3 text-xl text-center" style={{color: "#f3f6f9", paddingLeft: "6px"}}>
                    that creates an interface for conducting the polish TV show &quot;Familiada&quot; in Python using Pygame and the Tkinter library.
                </span>
            </div>
        )
    )
}

export default Familiada;
