import React, { useEffect, useState } from "react";
import "./Indexvalue.css"


const Indexvalue = () => {

  const [product, setproduct] = useState({});
  
  const array = [1, 2]



  useEffect(() => {

    const fetchproduct = (url) => {
      const getproducts = async () => {
        const res = await fetch(url);

        setproduct(await res.json());

      };




      getproducts();
    };

    fetchproduct("https://dummyjson.com/products");
  
  }, []);

  //   function add(a,b){
  // return a+b;
  


  //   }
    
  //   console.log(add(10,20))
  //   console.log(add(20,20))
  //   console.log(add(15,10))
  //   console.log(add(45,90))



    function removeduplicates(array){
    return [...new Set(array)]
  
    }

     
     console.log( typeof removeduplicates ( [20,10,20,8,7,6,8,4]))
     console.log(removeduplicates([10.9,9,6,6,4,,8,7,6,8,4]))
     console.log(removeduplicates([20,10,45,78,20,8,7,6,8,4]))
    

  // console.log("Rendering", product);

  // console.log(array.map((e) => {
  // return e*2;

  // }))

  // console.log([].map(function(){
  //    return "Karpagam"

  // }
  // ))

  const obj1={name:"Karpagam"}
   const obj2={...obj1}
   obj2.name= "Name changed"
  //  console.log(obj1.name)
  //   console.log(obj2.name)

    // console.log(product?.products?.map?.(function(product,index){

  //  return   {title:product.title, price: product.price, index: Date.now()+index }
          

  //   }))
    // const name = "Karpagam"

   function getDiscount  (price,discountPercentage){

    const caluclateDiscount =price*(discountPercentage/100)
      // console.log (caluclateDiscount)
      return Math.round(caluclateDiscount);
      
  }

   getDiscount(100,10)   


   
  //  oddEven( 100 )
   const dummyArray =[1,2,3,4,5,6,7,8,9,10]
   const tranformedArray= dummyArray.filter(function oddEven( number ){
    const getInput =  number %2==0 ? "even": "odd";
      console.log(number)
      return getInput
      return number >20
})
  //  console.log (tranformedArray)
    
// create a variable and store only chennai people 
//   map the filtered people and display the name in UI
//  filter === chennai

const people = [
  { name: "Arun Kumar", place: "Chennai" },
  { name: "Divya Raj", place: "Chennai" },
  { name: "Karthik V", place: "Chennai" },
  { name: "Sangeetha R", place: "Coimbatore" },
  { name: "Vignesh M", place: "Coimbatore" },
  { name: "Meena S", place: "Coimbatore" },
  { name: "Ravi Chandran", place: "Trichy" },
  { name: "Anjali Devi", place: "Trichy" },
  { name: "Suresh K", place: "Trichy" },
  { name: "Lakshmi B", place: "Dindigul" },
  { name: "Mohan R", place: "Dindigul" },
  { name: "Priya V", place: "Dindigul" }
];




const storedValue = people.filter(function GetValueInput(Peoples){
   const getstoredvalue= Peoples.place ==="Chennai";
    return getstoredvalue;
  
    
  
  

})

 console.log({storedValue})








  return (
    <div>
      <h1>Products</h1>

      {/* <span>{name}</span>
      <span>{name}</span>
      <span>{name}</span>
      <span>{name}</span>
      <span>{name}</span>
      <span>{name}</span>
      <span>{name}</span>
      <span>{name}</span>
      <span>{name}</span>
      <span>{name}</span> */}
      {product.products?.length > 1 && (
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 2fr 1fr",
            maxWidth: "100px",
          }}
        >
           


          {product.products.filter(function(product){
             return product.price >50

          }).map((product, index) => {

           
          return  < div key={product.id} className={index % 2 === 0 ? "ContainerOdd" : "ContainerEven"}>



        

              <h2 className="title">{product.title}</h2>
              <h2 style= {{textDecoration: "line-through"}}>{product.price}</h2>
              <h2>discout: { getDiscount(product.price, 10)}</h2>
              <h2>ActualPrice: {Math.round (product.price)- getDiscount(product.price, 10) }</h2>
              <h2> {oddEven(Math.round (product.price)- getDiscount(product.price, 10) )}</h2>
             
    
              <img src={product.images[0]} width={200} height={200} />
            </div>
})}


{/* write a function to find odd or even
takes a no as input
fun shld return Odd or EVEN */}

        </div>
      )}

{ storedValue.map(function(person){
  
  return <h2>{person.name}</h2>


})}


    </div>
  );
};

export default Indexvalue
