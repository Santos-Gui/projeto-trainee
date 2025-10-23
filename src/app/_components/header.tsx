"use Client"

export function Header() {

    return(
        <header>
            <div className="flex justify-between mx-8 py-2">
                <img src={'public/icon.png'} alt="Logo"/>
                <div className="flex space-x-2">
                    <button className="p-1 border-2 bg-black border-orange text-orange font-bold px-5 hover:bg-orange-700">Log In</button>
                    <button className="p-1 bg-orange text-white font-bold px-5 hover:bg-orange-700">Sign Up</button>
                </div>
            </div>
            <div className="flex justify-between py-1 bg-orange px-4">
                <div className="flex space-x-5 text-white font-bold ">
                    <a>Games</a>
                    <a>News</a>
                    <a>Forum</a>
                    <a>Lists</a>
                    <a>Help</a>
                </div>
                <input type="text" placeholder="Search Games" className="bg-white border-black border-1 rounded-lg"/>
            </div>
        </header>
    )
}