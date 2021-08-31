const SixSection = () => {
    return (
        <section className="max-w-[1536px] mx-auto flex flex-col py-24 px-4">
            <div className="w-full flex flex-col justify-end items-end">
                <div className="lg:w-1/2 space-y-3">
                    <h1 className="text-4xl">
                        Bring your Wordpress site to Next Level
                    </h1>
                    <p className="font-light tracking-wide">
                        If you want to appear in the Google search engine, your
                        website must be perfectly optimized, it is not enough to
                        add good content. With NextPress, your website will be
                        perfectly prepared for the LightHouse results and SEO
                        audit, you will start to appear in the TOP Google
                        results and you will attract more customers to your
                        business{' '}
                    </p>
                </div>
            </div>
            <div className="flex flex-col lg:flex-row pt-12 justify-between space-y-6 lg:space-y-0">
                <div className="flex flex-col items-center">
                    <div className="w-[200px] h-[200px] rounded-full bg-[#1F3228] border-[15px] border-[#0CCE6B] flex justify-center items-center">
                        <span className="text-3xl">90+</span>
                    </div>
                    <h2 className="text-3xl">Performance</h2>
                </div>
                <div className="flex flex-col items-center">
                    <div className="w-[200px] h-[200px] rounded-full bg-[#1F3228] border-[15px] border-[#0CCE6B] flex justify-center items-center">
                        <span className="text-3xl">90+</span>
                    </div>
                    <h2 className="text-3xl">Accessibility</h2>
                </div>
                <div className="flex flex-col items-center">
                    <div className="w-[200px] h-[200px] rounded-full bg-[#1F3228] border-[15px] border-[#0CCE6B] flex justify-center items-center">
                        <span className="text-3xl">90+</span>
                    </div>
                    <h2 className="text-3xl">Best Practices</h2>
                </div>
                <div className="flex flex-col items-center">
                    <div className="w-[200px] h-[200px] rounded-full bg-[#1F3228] border-[15px] border-[#0CCE6B] flex justify-center items-center">
                        <span className="text-3xl">90+</span>
                    </div>
                    <h2 className="text-3xl">SEO</h2>
                </div>
            </div>
        </section>
    )
}

export default SixSection
