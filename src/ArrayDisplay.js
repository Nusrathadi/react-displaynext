import React, { useState } from 'react'
let product=[
    {
        id:0,
        name:"Soap",
        Brand:"abc",
        price:100,
        color:"blue",
        image:"/images/handwash.jpg"
    },
    {
        id:1,
        name:"Shirts",
        Brand:"abc",
        price:700,
        color:"blue",
        image:"/images/shirt.jpg"
    },
    {
        id:2,
        name:"Shoe",
        Brand:"abc",
        price:1000,
        color:"blue",
        image:"/images/sh.jpg"
    },
    {
        name:"eatable",
        Brand:"abc",
        price:100,
        color:"blue",
        image:"/images/eatable.jpg"
    }
]
const ArrayDisplay = () => {
   
    const [pro,setPro] =useState({})
    const [limit,setLimit] =useState(2)
    const [showDiv,setShowDiv] = useState(false)
    

    function handlePro(x){
       setPro(x)
       setShowDiv(true)
    }
  return (
    <div  className='container'>
        <div className='flex' >
        {product.slice(0,limit).map((x)=>(
             <div className='card'>
             <img src={x.image}></img>
             <h4 onClick={()=>handlePro(x)}>{x.name}</h4>
          </div>
        ))}
        <div className='btn'>
        <button onClick={()=>setLimit(limit+1)}>next</button>
        <br/>
        <button onClick={()=>{setLimit(2);setShowDiv(false)}}>reset</button>
        </div>
        </div>

        {showDiv===true ?
        <div className='display'>
           name: {pro.name} <br/>
            color: {pro.color} <br/>
           price: {pro.price} <br/>
        </div>
        : ""}
        
        
    </div>
  )
}

export default ArrayDisplay