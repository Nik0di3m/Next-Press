import Image from 'next/image'

const ThirdSection = () => {
    return (
        <section className="flex flex-col lg:flex-row max-w-[1536px] mx-auto justify-between py-12 items-center">
            <div className="z-30 space-y-3 w-full">
                <h1 className="text-4xl">How its work?</h1>
                <h2 className="text-2xl font-thin">Its simple!</h2>
                <div>
                    <Image
                        src="/how_work.svg"
                        alt=""
                        width={1070}
                        height={243}
                    />
                </div>
                <div className="flex justify-end font-light text-lg">
                    <p className="lg:w-1/3">
                        Administration of website, edits content in Wordpress
                        panel, Next.js generate a static page with content from
                        cms download by using a GraphQL for extra optimization,
                        when Users get your page, Next.js server give him almost
                        instant a rendered page!
                    </p>
                </div>
            </div>
        </section>
    )
}

export default ThirdSection
