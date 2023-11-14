import './HomePage.css'
import Navbar from '../navbar/Navbar';
const HomePage = ({onClick}) => {

  return (
    <div>
      
      <div><Navbar/></div>
      <div style={{paddingTop:"40px"}}></div>
    <h1 style={{color:"black" ,fontSize:'50px', textAlign:"center",marginTop:"40px"}}>Welcome To Home Page</h1>
   <div  className='para'> <p>Welcome to store, where your online experience begins anew! Step into a digital realm crafted just for you, where convenience meets innovation. Our homepage is your gateway to a curated selection of top-quality products .</p> 
   <button onClick={onClick} className='btn'>See All Product</button>
   </div>

    </div>
  )
}
export  default HomePage;