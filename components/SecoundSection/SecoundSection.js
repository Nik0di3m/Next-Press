import Image from 'next/image'

const SecoundSection = () => {
    return (
        <section className="flex flex-col lg:flex-row max-w-[1536px] mx-auto p-4 justify-between py-24 items-center">
            <div>
                <Image
                    src="/wordpress_front.svg"
                    alt=""
                    width={217}
                    height={259}
                />
            </div>
            <div className="lg:w-1/2 mt-6 lg:mt-0">
                <h1 className="text-4xl">Why Wordpress as headless cms?</h1>
                <div className="font-light text-lg space-y-3 mt-3">
                    <p>
                        Wordpress is the most popular content management system,
                        around 30% of internet sites use it. It is easy to use
                        even for an amateur, and allows you to easily manage the
                        content on the site.
                    </p>
                    <p>
                        Unfortunately, Wordpress time is running out and new
                        solutions are appearing. The front of a website built on
                        wordpress is slow and the operation of the website
                        depends on the updating of plugins in which there may be
                        security errors.
                    </p>
                    <p>
                        It is true that wordpress is great for managing the
                        website content, and in combination with Next.js we get
                        a super fast website with the newest technology.{' '}
                    </p>
                </div>
            </div>
        </section>
    )
}

export default SecoundSection
