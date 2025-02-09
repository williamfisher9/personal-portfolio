const Contact = () => {
    return (
        <div>
            <div className='mt-8'>
                <a id="portfolio" className='text-zinc-400 text-[40px] font-bold'>Contact Me</a>
            </div>

            <div className="flex max-[1000px]:flex-col max-[1000px]:pl-0 pl-12 justify-around items-center max-[1000px]:gap-4 gap-20 mt-4">
                <div id="contact" className="contact-info">
                    <h1 className="text-zinc-400 text-xl">Contact me today to collaborate and discuss amazing projects and ideas.</h1>
                </div>

                <form className="contact-form flex flex-col gap-4 w-[70%]">

                    <input type="text" placeholder="name" className="bg-zinc-200/15 h-10 border-none outline-none text-zinc-400 rounded-md pl-2 placeholder:uppercase" />
                    <input type="text" placeholder="email" className="bg-zinc-200/15 h-10 border-none outline-none text-zinc-400 rounded-md pl-2 placeholder:uppercase" />
                    <textarea rows="4" cols="50" placeholder="message"  className="bg-zinc-200/15 h-10 border-none outline-none text-zinc-400 rounded-md pl-2 placeholder:uppercase"/>
                    <input type="button" value="submit" className="bg-transparent border border-zinc-400 text-zinc-400 rounded-md px-4 py-2 uppercase cursor-pointer hover:bg-zinc-400 hover:text-black"/>

                </form>
            </div>
        </div>
    )
}

export default Contact;