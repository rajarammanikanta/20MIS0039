import {Component} from 'react' 
import {Link} from 'react-router-dom'
import {v4 as uuid} from 'uuid'
import './index.css'


const productList=[
    {
     id: uuid(),
     productname: "Laptop 1",
     price: 22334,
     rating : 4.5,
     discount: 10,
     availability: "Yes"
    },
    {
        id: uuid(),
        productname: "Laptop 1",
        price: 22334,
        rating : 4.5,
        discount: 10,
        availability: "Yes"
       },

       {
        id: uuid(),
        productname: "Laptop 1",
        price: 22334,
        rating : 4.5,
        discount: 10,
        availability: "Yes"
       },
       {
        id: uuid(),
        productname: "Laptop 1",
        price: 22334,
        rating : 4.5,
        discount: 10,
        availability: "Yes"
       },
       {
        id: uuid(),
        productname: "Laptop 1",
        price: 22334,
        rating : 4.5,
        discount: 10,
        availability: "Yes"
       },
       {
        id: uuid(),
        productname: "Laptop 1",
        price: 22334,
        rating : 4.5,
        discount: 10,
        availability: "Yes"
       },
       {
        id: uuid(),
        productname: "Laptop 1",
        price: 22334,
        rating : 4.5,
        discount: 10,
        availability: "Yes"
       },
       {
        id: uuid(),
        productname: "Laptop 1",
        price: 22334,
        rating : 4.5,
        discount: 10,
        availability: "Yes"
       },
       {
        id: uuid(),
        productname: "Laptop 1",
        price: 22334,
        rating : 4.5,
        discount: 10,
        availability: "Yes"
       },
       {
        id: uuid(),
        productname: "Laptop 1",
        price: 22334,
        rating : 4.5,
        discount: 10,
        availability: "Yes"
       },
       {
        id: uuid(),
        productname: "Laptop 1",
        price: 22334,
        rating : 4.5,
        discount: 10,
        availability: "Yes"
       },
       {
        id: uuid(),
        productname: "Laptop 1",
        price: 22334,
        rating : 4.5,
        discount: 10,
        availability: "Yes"
       },
       {
        id: uuid(),
        productname: "Laptop 1",
        price: 22334,
        rating : 4.5,
        discount: 10,
        availability: "Yes"
       },
       {
        id: uuid(),
        productname: "Laptop 1",
        price: 22334,
        rating : 4.5,
        discount: 10,
        availability: "Yes"
       },
       {
        id: uuid(),
        productname: "Laptop 1",
        price: 22334,
        rating : 4.5,
        discount: 10,
        availability: "Yes"
       },
       {
        id: uuid(),
        productname: "Laptop 1",
        price: 22334,
        rating : 4.5,
        discount: 10,
        availability: "Yes"
       },
       {
        id: uuid(),
        productname: "Laptop 1",
        price: 22334,
        rating : 4.5,
        discount: 10,
        availability: "Yes"
       },

]

class products extends Component{ 
 

   /* componentDidMount(){
        this.getProducts()
    }

    getProducts=async()=>{
        const accessToken="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJNYXBDbGFpbXMiOnsiZXhwIjoxNzExNzk1MzgzLCJpYXQiOjE3MTE3OTUwODMsImlzcyI6IkFmZm9yZG1lZCIsImp0aSI6IjlkZWFlMTcxLTU2YjMtNGE1NC04YWQ1LTkwZTg5YjQ2ZGU1YiIsInN1YiI6InJhamFyYW1tYW5pa2FudGFtYW5pQGdtYWlsLmNvbSJ9LCJjb21wYW55TmFtZSI6IkFmZm9yZCBNZWRpY2FsIENvbGxlZ2UgVGVjaG5vbG9naWVzIiwiY2xpZW50SUQiOiI5ZGVhZTE3MS01NmIzLTRhNTQtOGFkNS05MGU4OWI0NmRlNWIiLCJjbGllbnRTZWNyZXQiOiJlZ0RXVXRxUktnbmtGbGV5Iiwib3duZXJOYW1lIjoiUmFqYXJhbSBNYW5pa2FudGEiLCJvd25lckVtYWlsIjoicmFqYXJhbW1hbmlrYW50YW1hbmlAZ21haWwuY29tIiwicm9sbE5vIjoiMjBNSVMwMDM5In0.nXYr3oSr4lC5GoIvPjwjBw83SWnEdIfKC52_l5qILMg"
        const api="http://20.244.56.144/test/companies/AMZ/categories/Laptop/products?top=10&minPrice=1&maxPrice=1";
        const options={
            headers: {
                Authorization: `Bearer ${accessToken}`,
              },
            method: "GET",
        }
        const response=await fetch(api,options);
        const data=await response.json(); 
        console.log(data)
    } 
    */
   

    render(){
        return(
            <>
                <nav className='navbar'>
                <div>
                    <h1>Welcome to E-Commerce</h1>
                </div>
                </nav> 
                <div>
                    <h2>Products</h2>  
                    <div>
                        <ul className='list-container'> 
                             
                                {productList.map(eachItem=>(<li className='list-item'>  
                                <Link to={`/products/`} className='Link'>
                                    <div>
                                    <p>Name: {eachItem.productname}</p>
                                    <p>Price: {eachItem.price}</p>
                                    <p>Rating: {eachItem.rating}</p>
                                    <p>Discount: {eachItem.discount}</p>
                                    <p>Availability: {eachItem.availability}</p>
                                    </div>
                                    </Link>
                                </li>))}
                          
                        
                        </ul>
                    </div>
                </div>

        

            </>
        )
    }
}


export default products