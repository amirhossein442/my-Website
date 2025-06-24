import { useContext } from "react";
import { ContextMe } from "./App";
import { useNavigate } from "react-router-dom";

export const Contact = () => {
    const { thems } = useContext(ContextMe);
    const navigate = useNavigate()

    return (
      <div className="body">
        <div class="contentContact" style={{ background: thems.background, color: thems.color }}>
            <table border="20">
                <tr>
                  <th>phone Number</th>
                  <th>Email</th>
                </tr>
                <tr>
                  <td>09131576645</td>
                  <td>amirhossein.442@gmail.com</td>
                </tr>
              </table>

              <div class="social-iconsContact">
                <a href="https://www.facebook.com/profile.php?id=100087470163426&sk=photos_by" class="logo-facebook"><ion-icon name="logo-facebook"></ion-icon></a>
                <a href="http://127.0.0.1:5501/index.html#"><ion-icon name="logo-google"></ion-icon></a>
                <a href="https://www.instagram.com/i_amirhoossein/"><ion-icon name="logo-instagram"></ion-icon></a>
                <a href="https://x.com/Amir74343203Www"><ion-icon name="logo-twitter"></ion-icon></a>
            </div>
            <a href="https://www.linkedin.com/in/amirhossein-zare-138a72356/"><h4 class="btn">Linkedin</h4></a>

          <button className="backHomeC" onClick={()=>navigate('/')}>Back to home</button>
        </div>
      </div>
        
    );
};