import Image from 'next/image'

const Hero = () => {
    return (
        <div className="flex flex-col lg:flex-row h-screen relative">
            <div className="h-full w-full lg:w-1/3 absolute top-0 left-0 hidden lg:block">
                <div className="relative h-full w-1/2">
                    <Image
                        src="/heroLeft.svg"
                        layout="fill"
                        alt=""
                        objectFit="contain"
                    />
                </div>
            </div>
            <div className="lg:w-1/2 z-10 flex p-2 lg:h-auto mt-24 lg:mt-0 lg:justify-center lg:pl-40 flex-col space-y-3 lg:whitespace-nowrap overflow-visible">
                <h1 className="text-4xl lg:text-7xl">Next level Wordpress</h1>
                <h2 className="text-xl lg:text-4xl font-light">
                    Next.js speed with Wordpress CMS
                </h2>
                <h2 className="lg:text-2xl font-base">Jump to NEXT level</h2>
                <button className="w-20 h-6 p-4 flex justify-center items-center shadow-md bg-[#004FFF] rounded-md hover:scale-105 active:scale-95 duration-150 hover:shadow-xl">
                    JUMP
                </button>
            </div>
            <div className="relative h-full w-full">
                <Image
                    src="/dataLine.svg"
                    layout="fill"
                    alt=""
                    objectFit="contain"
                />
            </div>
        </div>
    )
}

export default Hero
