import Search from "../components/Search";
import Foodmenu from "../components/Foodmenu";

const Food = () =>{
    return(
      <>
          <Search/>
          <div className={' flex flex-col items-center py-10 bg-gray-200 '}>
              <h2 className={'font-bold text-2xl text-gray-800'}>Food Menu</h2>
              <div className={'grid grid-cols-2 w-3/4 gap-x-10 gap-y-6 py-6'} >
                  <Foodmenu imagelink={'/pizza.jpg'} titlelink={'Pizza'} price={900}/>
                  <Foodmenu imagelink={'/momo.jpg'} titlelink={'momo'} price={800}/>
                  <Foodmenu imagelink={'/menu-momo.jpg'} titlelink={'momo'} price={500}/>
                  <Foodmenu imagelink={'/burger.jpg'} titlelink={'Burger'} price={1200}/>
                  <Foodmenu imagelink={'/menu-pizza.jpg'} titlelink={'Pizza'} price={1500}/>
                  <Foodmenu imagelink={'/pizza.jpg'} titlelink={'Pizza'} price={3000}/>
              </div>
          </div>
          </>
    )
}
export default Food