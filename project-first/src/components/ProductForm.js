import { useState } from 'react';
import './ProductForm.css'

function ProductForm(){
    
    const [newTitle, setTitle]= useState('');
    const [newDate, setDate]= useState('');

    function titleChangeHandler(event){
        setTitle(event.target.value);
    }

    function dateChangeHandler(event){
        setDate(event.target.value);
    }

    function submitHandler(event){
        event.preventDefault();

        const productData={
            title: newTitle,
            date: newDate
        };
        //console.log(ProductData);
        prop.onSaveProduct(productData)
        setDate(' ');
        setTitle(' ');
    }

    return(
        <form onSubmit={submitHandler}>
            <div className='new-product__controls'>
                <div className='new-product__control'>
                    <label className='new-product__control label'>Title</label>
                    <input type='text' value={newTitle} onChange={titleChangeHandler} className='new-product__control input'></input>
                </div>
               <div className='new-product__control'>
                   <label className='new-product__control label'>Date </label>
                   <input type='date' min='2024-01-01' max='2024-12-12' value={newDate} onChange={dateChangeHandler} className='new-product__control input'></input>
               </div>
               <div className='new-product__control'>
                  <button type='submit' className='new-product_button'>Add Product</button>
                </div>
            </div>
            
        </form>
    );

}

export default ProductForm;