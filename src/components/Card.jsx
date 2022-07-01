import React from 'react'
import axios from 'axios'
import { useEffect, useState } from "react";


export const Card = () => {
    const [fooddata, setFooddata] = useState([]);
    const food = () => {
        axios.get("http://localhost:8080/books").then((res) => {
          setFooddata(res.data);
          console.log(res.data);
        });
      };
    
      useEffect(() => {
        food();
      }, fooddata);
    

  return (
    <div>Card
         {fooddata.map((el) => {
          return (
            <>
            <h1>{el.title}</h1>
            {/* <img src={el.}/> */}
            </>
          );
        })}
    </div>
  )
}

