const Contact = () => {
    return (
       <div className={'bg-gray-200 py-10 '}>
           <div className={'w-4/5 mx-auto bg-white'}>
               <div className={'font-bold text-2xl text-slate-900 flex justify-center py-10'}>Contact Us</div>
               <div className={"flex py-4"}>
                   <div className={''}>
                       <div className={' flex flex-col px-10 py-10'}>
                           <span className={'text-rose-400 font-bold text-2xl'}>Contact Us</span>
                           <span>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus adipisci assumenda autem corporis </span>
                           <span>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus adipisci assumenda autem corporis</span>
                           <div className={'flex flex-wrap'}>
                               <div className={'flex flex-col w-1/2'}>
                                   <label htmlFor="fname" className={'font-bold text-xl'}>Name <span className={"text-rose-400"}>*</span></label>
                                   <input type="text" className={'border rounded-md w-[70%] h-[45px]'}/>
                               </div>

                               <div className={'flex flex-col w-1/2'}>
                                   <label htmlFor="email" className={'font-bold text-xl'}>Email</label>
                                   <input type="Email" className={'border rounded-md w-[70%] h-[45px]'}/>
                               </div>

                               <div className={'w-full mt-4 flex flex-col'}>
                                   <label htmlFor="message" className={'font-bold text-xl'}>Message</label>
                                   <textarea className={'border rounded-md w-full h-[200px]'}/>
                               </div>
                           </div>

                       </div>
                   </div>
                   <div className={'flex flex-col bg-gray-200 mx-2 px-4'}>
                   <span className={'text-rose-400 font-bold text-xl'}>
                       Email
                   </span>
                       <span className={'text-white'}>Bawayusuff@gmail.com</span>
                       <span className={'text-rose-400 font-bold text-xl'}>Telephone</span>
                       <span className={'text-white'}>08106480824</span>
                       <span className={'text-rose-400 font-bold text-xl'}>address</span>
                       <span className={'capitalize text-white'}>Diamond estate apete ibadan nigeria </span>
                   </div>
               </div>
           </div>
       </div>
    )
}

export default Contact