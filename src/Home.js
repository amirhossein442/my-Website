import { useContext } from "react"
import { ContextMe } from "./App"
import { Profile } from "./profile"
export const Home=()=>{
    const {thems}= useContext(ContextMe)
    return (
        <div className='content-home' style={{ background: thems.background, color: thems.color }}>
          <div>
            <Profile/>
          </div>
          <div className='content'>
            <h1 >Hi, it's <span>Amir</span></h1>
            <h3 class="typing-text">i'm a <span>Developer</span></h3>
            <p>I live in Yazd, Iran. I'm currently learning front-end development and web design. I am also interested in artificial intelligence and the future of technology.
                Also, I love diving into new ideas and pushing the boundaries of creativity, I believe innovation is the key to shaping the future!
            .</p>
                
            <div class="social-icons">
                <a href="https://www.facebook.com/profile.php?id=100087470163426&sk=photos_by" class="logo-facebook"><ion-icon name="logo-facebook"></ion-icon></a>
                <a href="http://127.0.0.1:5501/index.html#"><ion-icon name="logo-google"></ion-icon></a>
                <a href="https://www.instagram.com/i_amirhoossein/"><ion-icon name="logo-instagram"></ion-icon></a>
                <a href="https://x.com/Amir74343203Www"><ion-icon name="logo-twitter"></ion-icon></a>
            </div>
            <a href="https://www.linkedin.com/in/amirhossein-zare-138a72356/"><h4 class="btnn">Linkedin</h4></a>
          </div>
          
        </div>
    )
}