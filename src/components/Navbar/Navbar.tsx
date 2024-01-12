import './Navbar.css'
import '../../hamburgers/_base.scss'

function Navbar() {
    return (
        <>
            <nav className="fixed block w-full bg-oxford-blue px-5 py-2">
                <div className="flex justify-items-center items-center">
                    <div className="flex-grow-0">
                        <button className="hamburger" type="button">
                            <span className="hamburger-box">
                                <span className="hamburger-inner"></span>
                            </span>
                        </button>
                    </div>
                    <div className="flex-grow-0 flex-shrink-0">
                        <img className="rounded-full w-14 h-14" src="../../logo.png"/>
                    </div>
                    <div className="flex-auto sm:block ml-3 my-auto">
                        <input type="search" className="block px-3 py-1 w-2/6 rounded-lg bg-oxford-blue border border-gray-600" placeholder="Search"/>
                    </div>
                    {/* <div className="flex-auto sm:block my-auto">
                        <button type="button" className="text-white bg-gradient-to-r from-dark-orange via-tomato to-claret to-95% focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900 my-auto">New +</button>
                    </div> */}
                    <div className="flex-grow-0 mr-3.5">
                        <button type="button" className="text-white new-story-bg focus:ring-4 font-medium rounded-lg text-sm px-5 py-2.5 my-auto">New +</button>
                    </div>
                    <div className="inline-block w-0.5 self-stretch bg-neutral-100 opacity-100 dark:opacity-50"></div>
                    <div className="flex-grow-0 mx-3.5">
                        <img className="rounded-full w-10 h-10 p-0.5 border border-gray-400 hover:border-2" src="../../notification.ico"/>
                    </div>
                    <div className="flex-grow-0">
                        <img className="rounded-full w-10 h-10 p-0.5 border border-gray-400 hover:border-2" src="../../default-account.ico"/>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Navbar