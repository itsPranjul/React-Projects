import React from 'react';
import "./App.css";
import Products from './components/Products';
import NewProduct from './components/NewProduct';

const App =() =>{
  const products =[
    {
      id: 'p1',
      title: 'Nirma',
      amount: 100,
      date: new Date(2024, 2, 28),
    },
    {
      id: 'p2',
      title: 'Surf Excel',
      amount: 200,
      date: new Date(2024, 2, 2),
    },
    {
      id: 'p3',
      title: 'Ariel',
      amount: 500,
      date: new Date(2024, 12, 28),
    },
    {
      id: 'p4',
      title: 'Ezee',
      amount: 600,
      date: new Date(2024, 3, 28),
    }  
  ];

  function printProductData(data){
    console.log("I am in app.js");
    console.log(data);
  }

  return (
    <div>
      <NewProduct appProp={printProductData} />
      <Products items={products}/>
    </div>
  );

}


export default App;
