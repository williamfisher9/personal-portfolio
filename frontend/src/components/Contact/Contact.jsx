import { useContext } from "react";
import { ThemeContext } from "../../constants/Constants";

const Contact = () => {
    const theme = useContext(ThemeContext)

    return (
        <div>
            <div className='mt-8'>
                <a id="portfolio" className='text-[40px] font-bold'>Contact Me</a>
            </div>

            <div className="flex max-[1000px]:flex-col max-[1000px]:pl-0 pl-12 justify-around items-center max-[1000px]:gap-4 gap-20 mt-4">
                <div id="contact" className="contact-info">
                    <h1 className="text-xl">Contact me today to collaborate and discuss amazing projects and ideas.</h1>
                </div>

                <form className="contact-form flex flex-col gap-4 w-[70%]">

                    <input type="text" placeholder="name" className={`h-10 border-none outline-none rounded-md pl-2 placeholder:uppercase ${theme.theme == 'dark' ? 'bg-zinc-200/15' : 'bg-indigo-200'}`} />
                    <input type="text" placeholder="email" className={`h-10 border-none outline-none rounded-md pl-2 placeholder:uppercase ${theme.theme == 'dark' ? 'bg-zinc-200/15' : 'bg-indigo-200'}`} />
                    <textarea rows="5" cols="50" placeholder="message"  className={`h-10 border-none outline-none rounded-md pl-2 placeholder:uppercase ${theme.theme == 'dark' ? 'bg-zinc-200/15' : 'bg-indigo-200'}`} />
                    <input type="button" value="submit" className={`px-4 py-2 uppercase ${theme.theme == 'dark' ? 'btn-dark-theme' : 'btn-light-theme'}`}/>

                </form>
            </div>
        </div>
    )
}

export default Contact;