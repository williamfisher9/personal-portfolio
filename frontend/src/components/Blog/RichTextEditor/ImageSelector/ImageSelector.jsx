import { useState } from "react"
import { IoMdClose } from "react-icons/io"

const ImageSelector = ({visible, closeImageSelector, storeFileHere}) => {
    const [file, setFile] = useState(null)

    const handleFileInputChange = () => {
        //console.log(event.target.files[0])
        //setFile(event.target.files[0])

        storeFileHere(event.target.files[0])
    }


    if(!visible) return

    return <div 
            // required for the escape function below it to work
            tabIndex={-1}
            onKeyDown={(key) => {
                if(key === "Escape"){
                    closeImageSelector()
                }
            }}
            className="fixed inset-0 bg-black backdrop-blur-sm bg-opacity-40 flex items-center justify-center z-50">

        <div className="relative w-[80%] h-[80%] md:w-[760px] overflow-y-auto bg-white rounded-md p-8">

            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white" htmlFor="file_input">Upload file</label>
            <input 
            className="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer 
            bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400" 
            aria-describedby="file_input_help" id="file_input" type="file" 
            onChange={handleFileInputChange}/>
            
            <p className="mt-1 text-sm text-gray-500 dark:text-gray-300" id="file_input_help">SVG, PNG, JPG or GIF (MAX. 800x400px).</p>

            <div>
                <button className="absolute right-4 top-4 p-2 z-50" onClick={closeImageSelector}>
                    <IoMdClose />
                </button>
            </div>
                
        </div>

    </div> 
}

export default ImageSelector