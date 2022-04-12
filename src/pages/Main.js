import React, { useState } from 'react';
import Header_menu from '../components/header-menu/Header-menu';
import Home from './home/Home';
import product from '../components/data/products.json'
import categoria from '../components/data/categories.js';
import Footer from '../components/footer/footer';


const Main = (props) => {
    const [newProd, setProduct] = useState(product)
    const [search, setSearch] = useState('')
    const [categor, setCategor]= useState([])

    const filCat = (id) => {
        const newProduct = product.filter(e => e.category_id === id)
        setProduct([...newProduct])
        console.log([...newProduct]);
        const newcategor = categoria.filter(e => e.id === id)
        setCategor(...newcategor.short_title)
    }

    const discount = () => {
        const newDiscount = product.filter(e => e.discount != null)
        setProduct([...newDiscount])
    }

    const handleSub = (state) => {
        const value = state
        let newValue = product.filter(e => {
            return e.title.toLowerCase().indexOf(state.value.toLowerCase()) > -1
          })
          setProduct([...newValue])
    }
    const home =()=>{
        setProduct(product)
    }



    return (
        <div>
            <Header_menu
                data={categoria}
                filter={filCat}
                discount={discount}
                home={home}
                handleSub={handleSub} 
                categor={categor}/>
            <Home data={newProd} />
            <Footer/>
        </div>
    );
};

export default Main;