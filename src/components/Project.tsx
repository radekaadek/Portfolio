import Image from "next/image";
import { ImageProps } from "next/image";

const Project = (title: string, images: ImageProps[], text: JSX.Element) => {
    return (
        <div>
            <div className="text-4xl p-1 text-center text-blue-600">
                {title}
            </div>
            <div className="flex flex-row justify-center">
                <div className="text-center my-3 justify-center flex flex-col">
                    <div className="border-blue-600 border my-2 p-3 w-1/2 self-center flex">
                        {text}
                    </div>
                    <div className="flex flex-row flex-wrap justify-evenly">
                        {images.map((image, i) => {
                            return (
                                <Image key={i} src={image.src} alt={image.alt} width={image.width} height={image.height} className={image.className + "my-2"}/>
                            )
                        })}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Project;
