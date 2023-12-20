import hamburgerMenuBar from './../public/img/navbar/hamburger-menu-bar-icon.png'

function Navbar() {
    return (
        <>
            <nav className="flex flex-row">
                <div className="basis-1/12">
                    <img src={hamburgerMenuBar} alt="hamburger-menu-bar" />
                </div>
            </nav>
        </>
    )
}

export default Navbar