import React, { useEffect, useState } from "react";
import DatePicker from "react-datepicker";

import "./Indexvalue"

const Counteffect = () => {
  const [Count, setCount] = useState(0);
  const [product, setproduct] = useState({});
  const [startDate, setStartDate] = useState(new Date());

  useEffect(() => {
    const fetchproduct = () => {
      const getproducts = async () => {
        const res = await fetch("https://dummyjson.com/products");

        setproduct(await res.json());

        // fetch("https://dummyjson.com/products").then(res=>{console.log(res.json()).then (res=>console.log(res))} )
      };

      getproducts();
    };

    fetchproduct();
  }, []);



  const Handlechange = () => {
    setCount(Count + 1);
  };
     
   
  return (
    <div>

      <DatePicker selected={startDate} onChange={(date) => setStartDate(date)} />
      <h1>Products</h1>
      {product.products?.length > 1 && (
        <div className='grid grid-cols-5 gap-3 bg-gray-50'>
          
        
          {product.products.map((product) => (
            <div  className='shadow-md border pl-3 bg-white' key={product.id}>
              <img src={product.images[0]} width={200} height={200} />
              <h1 className="font-bold">{product.title}</h1>
            </div>
          ))}

        </div>
      )}

      <h1>count</h1>
      <p>{Count}</p>

      <button onClick={Handlechange}>Show count</button>
    </div>



  );
};

export default Counteffect;
