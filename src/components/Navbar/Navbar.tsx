import './Navbar.css'
import '../../hamburgers/_base.scss'

function Navbar() {
    return (
        <>
            <nav className="z-30 fixed block w-full bg-oxford-blue px-5 py-2 border-b border-gray-400">
                <div className="flex justify-items-center items-center">
                    <div className="flex-grow-0 md:hidden">
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
                        <form>
                            <div className="flex w-2/3">
                                <div className="relative w-full">
                                    <input type="search" id="search-dropdown" className="rounded-l-lg block p-2.5 w-full z-20 text-sm text-gray-200 search-bar-input-bg rounded-e-lg border border-gray-1 focus:border-1 focus:outline-none focus:border-dark-orange" placeholder="Search for stories or authors" required/>
                                    <button type="submit" className="absolute top-0 end-0 p-2.5 text-sm font-medium h-full text-white search-bar-btn-bg rounded-e-lg border border-dark-orange focus:ring-2 focus:ring-dark-orange focus:outline-none">
                                        <svg className="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
                                        </svg>
                                        <span className="sr-only">Search</span>
                                    </button>
                                </div>
                            </div>
                        </form>
                    </div>
                    <div className="flex-grow-0 mr-3.5">
                        <button type="button" className="text-white new-story-bg focus:ring-2 focus:ring-dark-orange font-medium rounded-lg text-sm px-5 py-2.5 my-auto">New +</button>
                    </div>
                    <div className="inline-block w-0.5 self-stretch bg-neutral-100 opacity-100 dark:opacity-50"></div>
                    <div className="flex-grow-0 mx-3.5">
                        <img className="rounded-full w-10 h-10 p-0.5 border border-gray-1 hover:border-2" src="../../notification.ico"/>
                    </div>
                    <div className="flex-grow-0">
                        <img className="rounded-full w-10 h-10 p-0.5 border border-gray-1 hover:border-2" src="../../default-account.ico"/>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Navbar