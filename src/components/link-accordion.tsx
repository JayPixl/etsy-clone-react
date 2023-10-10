import { useState } from "react"

interface props {
    options: string[]
    header: string
}

export default function LinkAccordion({ options, header }: props) {
    const [open, setOpen] = useState(false)
    return <div className="links w-full md:w-[50%] lg:w-[25%] my-2">
        <div className="header md:border-none border-b-2 border-white cursor-pointer relative flex flex-row justify-center md:justify-start pb-3 group hover:opacity-80 transition" onClick={() => setOpen(!open)}>
            <h3 className="mr-3 font-semibold">{header}</h3>
            <span className="downbutton md:hidden mr-2 absolute top-[50%] -translate-y-[50%] right-2">⏷</span>
        </div>
        <ul className={`${open ? "flex" : "hidden md:flex"} transition flex-col py-2`}>
            {options.map(option => <li className="text-sm font-light py-1 hover:opacity-90 w-full text-center md:text-left whitespace-nowrap" key={option}>
                <a href="#">{option}</a>
            </li>)}
        </ul>
    </div>
}