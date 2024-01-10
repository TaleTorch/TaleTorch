import './Navbar.css'
import '../../hamburgers.css'

function Navbar() {
    return (
        <>
            <nav className="flex flex-auto">
            
                {/* needs to add expandation aria     */}
                <button className="hamburger hamburger--vortex" type="button">
                    <span className="hamburger-box">
                        <span className="hamburger-inner"></span>
                    </span>
                </button>
                
            </nav>
        </>
    )
}

export default Navbar