import './ProductDetail.css';
import Navbar from '../Components/navbar/Navbar.jsx';
import axios from 'axios';
import { Box, Stack, } from "@mui/material";
import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

const ProductDetail = () => {

const navigations = useNavigate()
const goThanks = ()=>{
navigations("/thanks")
}
  const [Product, setProduct] = useState([])
  const { id } = useParams()

  const getData = async () => {
    try {
      const res = await axios.get(`https://fakestoreapi.com/products/${id}`);
      setProduct(res.data);

    } catch (err) {
      console.log(err);
    }
  }
  useEffect(() => {
    getData()
  }, [])
  console.log(Product)

  return (
    <>
      <div><Navbar /></div>

      <div style={{ paddingTop: "50px" }}></div>

      <Box sx={{ textAlign: "center", color: "cadetblue", fontFamily: "fantasy", fontSize: "30px" }}>PRODUCT DETAIL</Box>

      <Stack sx={{
        display: "flex",
        justifyContent: "center",
        flexDirection: "row",
        marginTop: "3vh",
        flexWrap: "wrap",
        textAlign: "center",
        // border:"2px solid black",
        margin: "8px",

      }}>

        <Box sx={{
          height: "210px",
          width: "190px",
          margin: "8px",
          borderRadius: "10px",
          border: "2px solid black",
          padding: "10px",
          boxShadow: "0px 0px 07px cadetblue"

        }}>
          <img className='img-product' style={{ borderRadius: "10px" }} src={Product.image} alt={Product.title} width="100%" height="100%" />
        </Box>

        <Box sx={{
          fontSize: "16px",
          margin: "14px",
          textAlign: "center",
          border: "2px solid black",
          borderRadius: "10px",
          width: "390px",
          padding: "05px",
          boxShadow: "0px 0px 10px black"
        }}>{Product.description}
          All well Prouct!
        </Box>

        <Box sx={{
          // height: "210px",
          width: "190px",
          margin: "8px",
          borderRadius: "10px",
          border: "2px solid black",
          padding: "10px",
          boxShadow: "0px 0px 07px cadetblue"

        }}>

          <Box sx={{ fontSize: "20px", color: "blue" }} ><b>{Product.category}</b></Box>

          <Box sx={{ fontSize: "20px", color: "black" }} ><b>{Product.title}</b></Box>

          <Box sx={{
            fontSize: "19px",
            margin: "3px",
            textAlign: "center",
            color: "brown",
          }}><b>Rs : ${Product.price}</b></Box>

          <Box><button onClick={goThanks} className='btnn'>Buy</button></Box>
        </Box>

      </Stack>
    </>

  )
}
export default ProductDetail