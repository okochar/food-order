const FoodCategory = ({imageLink, category}) => {
    return (
        <div className={" rounded-[29px]  w-[300px] overflow-hidden relative mx-4"}>
            <span
                className={'absolute bottom-10 text-2xl flex justify-center inset-x-0 z-20 text-white font-bold capitalize'}>
                {category}
            </span>
            <img src={imageLink} alt="" className={'h-[400px] w-full object-cover'}/>

        </div>
    )
}

export default FoodCategory