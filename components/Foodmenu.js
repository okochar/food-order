const Foodmenu = ({imagelink, titlelink, price}) => {
    return (
        <>
            <div className={'bg-white flex w-full h-[200px] p-4 rounded-[15px]'}>
                <img src={imagelink} alt="" className={'h-[100px] w-[100px] object-cover rounded-md'}/>
                <div className={'flex flex-col ml-10 w-[calc(100%-150px)] '}>
                    <span className={'font-bold'}>{titlelink}</span>
                    <span className={'font-bold'}>#{price}</span>
                    <span>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto odio officia asi sapiente similique vero!</span>
                    <span><button className={'bg-rose-400 rounded-md px-3 py-1 mt-2 text-white'}>Order Now</button></span>
                </div>

            </div>
        </>
    )
}

export default Foodmenu