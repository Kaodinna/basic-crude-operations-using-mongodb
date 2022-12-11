import { Link, Outlet } from "react-router-dom";
import "./navbar.css"

const Header = () => {
    return ( 
        <header>
          
             <h1 className="logo"> ShopNow!...</h1>
            
        <nav  className="navbar">      
                    
                    <ul className="nav-links">
                  <li> <Link className="links" to='/'>Home</Link></li> 
                  <li> <Link className="links" to='/'>Movies</Link></li> 
                  <li> <Link className="links" to='/'>Orders</Link></li>  
                  <li> <Link className="links" to='/'>Contact Us</Link></li> 
                  <li> <Link className="links" to='/'>About Us</Link></li>  
            <form class="d-flex" role="search">
            <input class="form-control me-2" type="search" placeholder="Search For Products" aria-label="Search"/>
            <button class="btn btn-outline-success" type="submit">Search</button>
          </form>
            
                    </ul>
                    </nav>
       
       
        <Outlet/>
       

        </header>

        
     );
}
 
export default Header;