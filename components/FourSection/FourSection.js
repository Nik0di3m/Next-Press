import Image from 'next/image'

const FourSection = () => {
    return (
        <section className="flex flex-col max-w-[1536px] lg:py-12 text-center mx-auto">
            <h1 className="text-4xl">Who uses Next.js?</h1>
            <div className="hidden lg:flex flex-col lg:flex-row mt-20">
                <div className="transform-gpu translate-x-20 -translate-y-8 scale-[0.8] relative shadow-lg">
                    <Image
                        src="/twitch.webp"
                        alt=""
                        width={300}
                        height={150}
                        className="rounded-xl"
                    />
                    <div className="w-full h-full absolute bottom-1 flex items-end opacity-0 hover:opacity-100 duration-150 cursor-pointer">
                        <div className="w-full mx-auto h-8 bg-black rounded-br-xl rounded-bl-xl opacity-60">
                            Twitch
                        </div>
                    </div>
                </div>
                <div className="transform-gpu translate-x-8 -translate-y-4 scale-[0.9] relative shadow-lg">
                    <Image
                        src="/netflix.png"
                        alt=""
                        width={300}
                        height={150}
                        className="rounded-xl"
                    />
                    <div className="w-full h-full absolute bottom-1 flex items-end opacity-0 hover:opacity-100 duration-150 cursor-pointer">
                        <div className="w-full mx-auto h-8 bg-black rounded-br-xl rounded-bl-xl opacity-60">
                            Netflix
                        </div>
                    </div>
                </div>
                <div className="z-20 relative shadow-lg">
                    <Image
                        src="/git.png"
                        alt=""
                        width={300}
                        height={150}
                        className="rounded-xl"
                    />
                    <div className="w-full h-full absolute bottom-1 flex items-end opacity-0 hover:opacity-100 duration-150 cursor-pointer">
                        <div className="w-full mx-auto h-8 bg-black rounded-br-xl rounded-bl-xl opacity-60">
                            GitHub
                        </div>
                    </div>
                </div>
                <div className="transform-gpu -translate-x-8 -translate-y-4 scale-[0.9] relative z-10 shadow-lg">
                    <Image
                        src="/nike.png"
                        alt=""
                        width={300}
                        height={150}
                        className="rounded-xl"
                    />
                    <div className="w-full h-full absolute bottom-1 flex items-end opacity-0 hover:opacity-100 duration-150 cursor-pointer">
                        <div className="w-full mx-auto h-8 bg-black rounded-br-xl rounded-bl-xl opacity-60">
                            Nike
                        </div>
                    </div>
                </div>
                <div className="transform-gpu -translate-x-20 -translate-y-8 scale-[0.8] relative shadow-lg">
                    <Image
                        src="/tiktok.webp"
                        alt=""
                        width={300}
                        height={150}
                        className="rounded-xl"
                    />
                    <div className="w-full h-full absolute bottom-1 flex items-end opacity-0 hover:opacity-100 duration-150 cursor-pointer">
                        <div className="w-full mx-auto h-8 bg-black rounded-br-xl rounded-bl-xl opacity-60">
                            TikTok
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex flex-col lg:hidden space-y-3 mt-8">
                <div>
                    <Image
                        src="/twitch.webp"
                        alt=""
                        width={300}
                        height={150}
                        className="rounded-xl"
                    />
                </div>
                <div>
                    <Image
                        src="/netflix.png"
                        alt=""
                        width={300}
                        height={150}
                        className="rounded-xl"
                    />
                </div>
                <div>
                    <Image
                        src="/git.png"
                        alt=""
                        width={300}
                        height={150}
                        className="rounded-xl"
                    />
                </div>
                <div>
                    <Image
                        src="/nike.png"
                        alt=""
                        width={300}
                        height={150}
                        className="rounded-xl"
                    />
                </div>
                <div>
                    <Image
                        src="/tiktok.webp"
                        alt=""
                        width={300}
                        height={150}
                        className="rounded-xl"
                    />
                </div>
            </div>
        </section>
    )
}

export default FourSection
