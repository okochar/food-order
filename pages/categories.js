import FoodCategory from "../components/FoodCategory";

const Categories = () => {
    return(
      <>

          <div className={'pb-20'}>
              <div className={'font-bold text-2xl text-black-500 flex justify-center py-10 '}>Explore Food</div>
              <div className={"grid  grid-cols-3 w-3/4 mx-auto gap-y-4 "}>
                  <FoodCategory category={"burger"} imageLink={"/burger.jpg"}/>
                  <FoodCategory category={"pizza"} imageLink={"/menu-pizza.jpg"}/>
                  <FoodCategory category={"momo"} imageLink={"/momo.jpg"}/>
                  <FoodCategory category={"donught"} imageLink={"/dou.jpg"}/>
                  <FoodCategory category={"pancake"} imageLink={"/pankake.jpg"}/>
                  <FoodCategory category={"strawberry"} imageLink={"/stray.jpg"}/>
                  <FoodCategory category={"vegetables"} imageLink={"/vege.jpg"}/>
                  <FoodCategory category={"vege"} imageLink={"/vege1.jpg"}/>
                  <FoodCategory category={"Cake"} imageLink={"/cake.jpg"}/>
              </div>
          </div>
          </>
    )


}
export default Categories