import "./Sidebar.css"

interface SidebarItemProps{
    title: string
}

function SidebarItem(props: SidebarItemProps) {
    return (
        <>
            <li className='block mx-4 py-1 pl-8 rounded text-xl transition-all duration-250 hover:pl-10 hover:bg-slate-800'>{props.title}</li>
        </>
    )
}

export default SidebarItem