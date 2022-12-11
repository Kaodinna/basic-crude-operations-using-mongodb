// import Header from "../navbar/navbar";
import ReactPaginate from 'react-paginate'
import axios from "axios";
import { useState } from "react";
import { useEffect} from "react";
import './movies.css'
import Movienav from "../movienav/movienav";



const Movies = () => {
const [data, setData] =useState([])
const [pageNumber, setPageNumber] =useState(0)



    useEffect(() => {
        axios
           .get('http://localhost:3030/movies/allmovies')
           .then((response) => {
            setData(response.data)
              console.log(response.data
                );
           })
           .catch((err) => {
              console.log(err);
           });
     }, []);


  
     const dataPerPage = 5
     const pagesVisited = pageNumber * dataPerPage
     const displayData = data.slice(pagesVisited, pagesVisited +dataPerPage).map((data) =>{
       return(
       <div className="product-container">
       <div key={data.id}>
            <h3>{data.image}</h3>
            <div className="h5">
           <h5>{data.title}</h5>
           <h5>{data.description}</h5>
           <h5>{data.price}</h5>
         </div>
       </div>
       </div> 
       )
         })
        //  const pageCount = Math.celi(data.length / dataPerPage)
        //  const pageCount = Math.ceil(data.length/dataPerPage)
         const pa = Math.ceil(data.length/dataPerPage)
         const changePage = ({selected})=>{
           setPageNumber(selected)
         }

    return ( 
        <>
            <Movienav/>
              
            {/* <div className="card-bodys">
                  {data.map(data =>(
                    <div className="product-container">
                     <div className="product"> 
                    <div key={data.id}>
                         <h3>{data.image}</h3>
                         <div className="h5">
                        <h5>{data.title}</h5>
                        <h5>{data.description}</h5>
                        <h5>{data.price}</h5>
                        </div>
                         </div> 
                        </div>
                        </div>
                ))}
             
             </div> */}
     


             {/* <Productnav /> */}

<div>{displayData}</div>

<ReactPaginate

pageRangeDisplayed={5}

previousLabel="previous"

nextLabel="next"

pageCount={pa}

onPageChange={changePage}

containerClassName={'paginationBttns'}

previousLinkClassName={'previousBttn'}

nextLinkClassName={'nextBttn'}

disabledClassName={'paginationDisable'}

activeClassName={'paginationActive'}

// onChangePage={handlePageChange}



/>
   
    </>
     );
}
 
export default Movies;