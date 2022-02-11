import Search from "../components/Search";
import FoodCategory from "../components/FoodCategory";
import Foodmenu from "../components/Foodmenu";
import Link from "next/link";

export default function Home() {
    return (
        <>
            <Search/>
            <div className={'pb-20'}>
                <div className={'font-bold text-2xl text-black-500 flex justify-center py-10'}>Explore Food</div>
                <div className={"flex justify-center "}>
                    <FoodCategory category={"burger"} imageLink={"/burger.jpg"}/>
                    <FoodCategory category={"pizza"} imageLink={"/menu-pizza.jpg"}/>
                    <FoodCategory category={"momo"} imageLink={"/momo.jpg"}/>
                </div>
            </div>
            <div className={' flex flex-col items-center py-10 bg-gray-200 '}>
                <h2 className={'font-bold text-2xl text-gray-800'}>Food Menu</h2>
                <div className={'grid grid-cols-2 w-3/4 gap-x-10 gap-y-6 py-6'}>
                    <Foodmenu imagelink={'/pizza.jpg'} titlelink={'Pizza'}/>
                    <Foodmenu imagelink={'/momo.jpg'} titlelink={'Pizza'}/>
                    <Foodmenu imagelink={'/menu-momo.jpg'} titlelink={'Pizza'}/>
                    <Foodmenu imagelink={'/burger.jpg'} titlelink={'Pizza'}/>

                </div>
                <div className={'flex justify-center'}>
                    <Link href={'/food'}>
                        <a className={'text-rose-600 '}>
                            See All Food
                        </a>
                    </Link>
                </div>
            </div>
        </>
    )
}
