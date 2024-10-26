import Link from "next/link";
import Project from "./Project";

const Kapliczki = () => {
    return (
        Project(
            "Kleszczów Shrines",
            [
                {
                    src: "/shrines.png",
                    alt: "shrines",
                    width: "600",
                    height: "375",
                    className: "",
                    href: "https://github.com/PlohnenSoftware/familiada_ZSP"
                },
                {
                    src: "/kapliczka.png",
                    alt: "add_shrine",
                    width: "600",
                    height: "375",
                    className: "",
                    href: "https://github.com/PlohnenSoftware/familiada_ZSP"
                }
            ],
            <div className="w-full">
                <span className="p-3 text-xl text-center" style={{color: "#f3f6f9", paddingRight: "6px"}}>Interactive web app created with friends @</span>
                <Link href="github.com/xKRISTOFx" passHref legacyBehavior>
                <span className="text-xl text-center text-blue-500 hover:cursor-pointer">Technical School in Kleszczów</span>
                </Link>
                <span className="p-3 text-xl text-center" style={{color: "#f3f6f9", paddingLeft: "6px"}}>
                     that displays catholic shrines in Kleszczów. Users can click on shrines and see how they look in real life. The app also includes a module where users can report new shrines and contact maintainers.
                </span>
            </div>,
            "https://github.com/radekaadek/kapliczkikleszczow",
            "https://kapliczkikleszczow.vercel.app/"
        )
    )
}

export default Kapliczki;
