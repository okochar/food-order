import Link from "next/link";

const Header = () => {
    return (
        <nav className={"flex px-20 py-4"}>
            <div className={"w-[200px] h-10 flex items-center text-2xl text-rose-800 font-semibold"}>
                <img src={"/logo.png"} className={"h-10"} />
                <span className={"ml-3"}>
                    Canteen
                </span>
            </div>
            <div className={"w-[calc(100%-200px)]"}>
                <ul className={"flex justify-end text-xl text-rose-600 items-center h-full"}>
                    <li className={"px-4"}>
                        <Link href={"/"}>
                            <a>
                                Home
                            </a>
                        </Link>
                    </li>
                    <li className={"px-4"}>
                        <Link href={"/categories"}>
                            <a>
                               Categories
                            </a>
                        </Link>
                    </li>
                    <li className={"px-4"}>
                        <Link href={"/food"}>
                            <a>
                                Food
                            </a>
                        </Link>
                    </li>
                    <li className={"px-4"}>
                        <Link href={"/contact"}>
                            <a>
                               Contact
                            </a>
                        </Link>
                    </li>
                </ul>

            </div>
        </nav>
    )
}

export default Header