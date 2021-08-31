import Link from 'next/link'

const Header = () => {
    return (
        <header className="flex justify-between items-center px-12 py-3 sticky top-0 shadow-sm bg-[#0E1116] z-50">
            <h1 className="text-xl hover:scale-105 cursor-pointer duration-150">
                Next<span className="text-[#004FFF]">Press</span>
            </h1>
            <nav className="hidden lg:block">
                <ul className="flex space-x-3">
                    <Link href="/" passHref>
                        <a>
                            <li className="hover:scale-105 hover:text-[#004FFF] active:scale-95 duration-150 cursor-pointer">
                                HOME
                            </li>
                        </a>
                    </Link>
                    <Link href="/" passHref>
                        <a>
                            <li className="hover:scale-105 hover:text-[#004FFF] active:scale-95 duration-150 cursor-pointer">
                                HOME
                            </li>
                        </a>
                    </Link>
                    <Link href="/" passHref>
                        <a>
                            <li className="hover:scale-105 hover:text-[#004FFF] active:scale-95 duration-150 cursor-pointer">
                                HOME
                            </li>
                        </a>
                    </Link>
                    <Link href="/" passHref>
                        <a>
                            <li className="hover:scale-105 hover:text-[#004FFF] active:scale-95 duration-150 cursor-pointer">
                                HOME
                            </li>
                        </a>
                    </Link>
                </ul>
            </nav>
        </header>
    )
}

export default Header
