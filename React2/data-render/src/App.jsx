import React, { useState } from 'react'

const App = () => {
  console.log("App rendering ...");
  

  const [productsData,setProductsData] = useState([  
  ]);

  const deleproduct = (id) => {
    let products  = productsData.filter((elem)  => elem.id !==id);
    setProductsData(products);
  }
  return (
    <div>
      
    </div>
  )
}

export default App;

