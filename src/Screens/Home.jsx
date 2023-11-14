import { useNavigate } from "react-router-dom";
import HomePage from "../Components/HomePage/HomePage";

const Home = () => {
   
  const navigations = useNavigate()

  const PageChange = ()=>{
    navigations("/allproduct")
  }

  return (
    
    <div>
      <HomePage onClick={PageChange}/>
    </div>
  )
}
export default Home;