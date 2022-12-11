import Header from "../navbar/navbar";
import "./homepage.css"
import { Link } from "react-router-dom";
import Beru from "../assets/beru.jpeg"
import C3po from "../assets/c3po.jpeg"
import Image1 from "../assets/image1.jpeg"
import DARTH from "../assets/DARTH.jpeg"
import Image2 from "../assets/image2.jpeg"
import Image3 from "../assets/image3.jpeg"
import Image4 from "../assets/image4.jpeg"
import Footer from "../footer/footer";
import OtherP from "../other/otherP";

const Homepage = () => {
    return ( 
        <>
        <Header />
        <div className="homepage">
            <h1 className="home-h1">Welcome To Moviestore!...</h1>
            <div className="homepage-container">
                <div className="homepage-text">
                    <h2 className="home-h2"> Interesting Movies are finally here</h2>
                    <p className="home-p">Login/Register to add Movies And Enjoy 50% Discount On All Current </p>
                    <div className="bodyLog">
                        <Link className="bodylog-btn" to="/users/login">Login</Link>
                        <Link className="bodylog-btn" to="/users/register">Register</Link>
                    </div>
                </div>

                <div className="firstbody-img">
                    <div className="first">
                        <img className="firs"  src={Beru} alt="" />
                        <img className="firs"  src={DARTH} alt="" />
                    </div>

                    <div className="second">
                        <img className="firs" src={Image1} alt="" />
                        <img className="firs" src={Image2} alt="" />
                        <img  className="firs"  src={C3po} alt="" />
                    </div>

                    <div className="first">
                        <img className="firs" src={Image3} alt=" " />
                        <img className="firs"  src={Image4} alt=" " />
                    </div>


                </div>
            </div>
            <OtherP/>
            <Footer/>
        </div>
        </>
    );
}
 
export default Homepage;