const Search = () =>{
    return(
        <div className={"flex bg-[url('/bg.jpg')] h-[250px] bg-cover justify-center items-center"}>
            <input type="text" placeholder={'search'} className={'h-10 px-3 rounded-md focus:outline-none focus:ring ring-rose-400 '}/>
            <button className={'h-10 bg-rose-600 rounded-md ml-3 px-3 text-white'}>Search</button>
        </div>
    )
}
export default Search