import './usernavbar.css'
import { Link, Outlet } from "react-router-dom";
const UserNav = () => {
    return ( 

        <header className='usernavbar'>
          
        <h1 className="logo"> ShopNow!...</h1>
       
   <nav  className="navbar">      
               
               <ul className="nav-links">
             <li> <Link className="links" to='/'>Home</Link></li> 
             <li> <Link className="links" to="/movies/addmovie'">Add Products</Link></li> 
             <li> <Link className="links" to='/'>Edit Products</Link></li>  
             <li> <Link className="links" to='/'>Delect Products</Link></li>  
             <li> <Link className="links" to='/'>Log out</Link></li>  
               </ul>
               </nav>
  
  
   <Outlet/>
  

   </header>

     );
}
 
export default UserNav;