import "./Header.css"
import heroImg from "./assets/hero.png"


function Header() {
    return (
        <div>
            <logo> <img src={heroImg} alt="Hero Vite " /> </logo>
            <nav>
                <a href="/home">Home</a>
                <a href="/contactos">Contact</a>
            </nav>
            <div className="clear"></div>
        </div>
    )
}

export default Header