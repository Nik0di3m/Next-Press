import Image from 'next/image'

const FirstSection = () => {
    return (
        <section className="flex flex-col lg:flex-row justify-between relative max-w-[1536px] p-4 mx-auto mt-24 z-10">
            <div className="lg:w-1/2 space-y-3">
                <h1 className="text-2xl lg:text-4xl">
                    Why Next.js over Wordpress Frontend?
                </h1>
                <div className="font-light text-lg space-y-2 w-[90%]">
                    <p>
                        Next.js is a JavaScript framework that enables you to
                        build superfast and extremely user-friendly static
                        websites, as well as web applications using React.
                    </p>
                    <p>
                        In fact, thanks to Automatic Static Optimization,
                        “static” and “dynamic” become one now.
                    </p>
                    <p>
                        This feature allows Next.js to build hybrid applications
                        that contain both server-rendered and statically
                        generated pages.
                    </p>
                    <p>
                        Next.js is widely used by the biggest and most popular
                        companies all over the world like Netflix, Uber,
                        Starbucks, or Twitch. It’s also considered as one of the
                        fastest-growing React frameworks, perfect to work with
                        static sites – which was the hottest topic in the web
                        development world lately.
                    </p>
                </div>
            </div>
            <div className="lg:w-1/2 flex flex-col justify-around space-y-3 mt-6 lg:mt-0">
                <div>
                    <Image
                        src="/next_small.svg"
                        width={113}
                        height={69}
                        alt=""
                    />
                    <div className="w-full h-1 bg-[#004fff] rounded-full"></div>
                </div>
                <div>
                    <Image
                        src="/wordpress_small.svg"
                        width={69}
                        height={69}
                        alt=""
                    />
                    <div className="w-[50%] h-1 bg-white rounded-full"></div>
                </div>
            </div>
        </section>
    )
}

export default FirstSection
