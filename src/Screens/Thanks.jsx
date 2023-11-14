import { useNavigate } from "react-router-dom";
const Thanks = () => {
  const navigations = useNavigate()
  const goHome = () => {
    navigations("/")
  }
  return (
    <>
      <div style={{ height: "350px", width: "270px", margin: "auto", marginTop: "30px" }}><img src="https://pngimg.com/d/thank_you_PNG104.png" width='100%' height="100%" alt="" /></div>

      <div style={{ textAlign: "center" }}><button onClick={goHome} className='btnn'>Go To Home</button></div>
    </>
  )
}
export default Thanks;