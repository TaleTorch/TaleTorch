import "./Sidebar.css"

interface SidebarItemProps{
    title: string
}

function SidebarItem(props: SidebarItemProps) {
    return (
        <>
            <li>{props.title}</li>
        </>
    )
}

export default SidebarItem