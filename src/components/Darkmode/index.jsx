import Light from '../../assets/website/light.png'
import Dark from '../../assets/website/dark.png'
import { useEffect, useState } from 'react'

const Darkmode = () => {
    let [theme, setTheme] = useState(localStorage.getItem("theme") ? localStorage.getItem("theme") : "light");

    const element = document.documentElement;

    useEffect(() => {
        if (theme == "dark") {
            element.classList.add("dark");
            localStorage.setItem("theme", "dark");
        }
        else {
            element.classList.remove("dark");
            localStorage.setItem("theme", "light");
        }
    }, [theme])

    return (
        <div className='relative'>
            <img onClick={() => setTheme(theme === "light" ? "dark" : "light")} src={Light} className={`w-12 cursor-pointer transition-all duration-300 absolute right-0 z-10 ${theme === "dark" ? "opacity-0" : 'opacity-100'}`} />
            <img onClick={() => setTheme(theme === "light" ? "dark" : "light")} src={Dark} className={`w-12 cursor-pointer transition-all duration-300`} />
        </div>
    )
}

export default Darkmode