import './Sidebar.css'
import SidebarItem from './SidebarItem'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHouse, faBook, faPencil, faGear } from '@fortawesome/free-solid-svg-icons'

function Sidebar() {
    return (
        <>
            <nav className='z-20 fixed flex flex-col items-center w-1/6 min-w-56 h-full bg-oxford-blue border-r border-dark-orange pt-16'>
                <div className='h-fit w-full my-2 text-white block mx-4 py-4 pl-10 rounded text-xl duration-200 hover:pl-10 hover:bg-gray-900'><FontAwesomeIcon icon={faHouse} />  Home</div>
                <div className='h-fit w-full'>
                    <div className='mb-2 text-gray-1 pl-8 uppercase'>Dashboard</div>
                    <ul className='text-white'>
                        <li className='dashboard-item block mx-4 py-1 pl-8 rounded text-xl transition-all duration-250 hover:pl-10'><FontAwesomeIcon icon={faBook} />  My Stories</li>
                        <li className='dashboard-item block mx-4 py-1 pl-8 rounded text-xl transition-all duration-250 hover:pl-10'><FontAwesomeIcon icon={faPencil} />  New Story</li>
                        <li className='dashboard-item block mx-4 py-1 pl-8 rounded text-xl transition-all duration-250 hover:pl-10'><FontAwesomeIcon icon={faGear} />  Settings</li>
                    </ul>
                </div>
                <div className='h-fit w-full my-6'>
                    <div className='mb-2 text-gray-1 pl-8 uppercase'>top stories</div>
                    <ul className='text-white'>
                        <SidebarItem title='Story 1' />
                        <SidebarItem title='Story 2' />
                        <SidebarItem title='Story 3' />
                    </ul>
                </div>
                <div className='h-fit w-full'>
                    <div className='mb-2 text-gray-1 pl-8 uppercase'>fresh stories</div>
                    <ul className='text-white'>
                        <SidebarItem title='Story 1' />
                        <SidebarItem title='Story 2' />
                        <SidebarItem title='Story 3' />
                    </ul>
                </div>
            </nav>
        </>
    )
}

export default Sidebar