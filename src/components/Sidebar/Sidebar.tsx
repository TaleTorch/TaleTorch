import './Sidebar.css'

function Sidebar() {
    return (
        <>
            <nav className='z-20 fixed flex flex-col items-center w-1/6 min-w-56 h-full bg-oxford-blue border-r border-claret pt-16'>
                <div className='h-fit w-full pt-8 text-center'>
                    <div className='mb-2 text-gray-1 uppercase'>Dashboard</div>
                    <ul className='text-white'>
                        <li className='block mx-4 py-1 border border-oxford-blue rounded text-xl hover:border hover:border-dark-orange'>My Stories</li>
                    </ul>
                </div>
                <div className='w-full px-12 py-12'>
                    <div className='text-gray-1 uppercase'>Title</div>
                    <ul className='pl-4 text-white'>
                        <li className='block'></li>
                    </ul>
                </div>
                <div>
                    <div></div>
                    <ul>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                    </ul>
                </div>
            </nav>
        </>
    )
}

export default Sidebar