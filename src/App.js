import React, { useState, useEffect } from 'react';
import './App.css';
import ProductAPI from './api/productAPI';
import Routers from './Routers';
import CategoryAPI from './api/categoryAPI';

function App() {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    // call api
    const getTodos = async () => {
      try {
        const { data: products } = await ProductAPI.getAll();
        console.log(products);
        // console.log(dataTodos);
        setProducts(products)
      } catch (error) {
        console.log(error)
      }
    }
    getTodos();
  }, [])

  useEffect(() => {
    // call api
    const getTodos = async () => {
      try {
        const { data: categories } = await CategoryAPI.getAll();
        console.log(products);
        // console.log(dataTodos);
        setCategories(categories)
      } catch (error) {
        console.log(error)
      }
    }
    getTodos();
  }, [])

  const onHandleAdd = async (product) => {
    console.log(product)
    try {
      const { data} =await ProductAPI.add(product);
      setProducts([
        ...products,
        data
      ]);
    } catch (error) {
      console.log(error)
    }
  }
  const updateProduct = async (id, product) => {
    try {
      const { data } = await ProductAPI.update(id, product);
      const newProduct = products.map(value => value._id == id ? data : value)
      setProducts(newProduct)
    } catch (error) {
      console.log(error)
    }
  }
  const onHandleDelete = async (id) => {
    try {
      await ProductAPI.remove(id);
      const newProducts = products.filter(product => product._id !== id);
      setProducts(newProducts);
    } catch (error) {
      console.log(error)
    }

    // console.log(todos);
  }

  const addCate = async (category) => {
    // console.log(category)
    try {
      const {data} =await CategoryAPI.add(category);
      setCategories([
        ...categories,
        data
      ]);
    } catch (error) {
      console.log(error)
    }
  }
  const updateCate = async (id, category) => {
    try {
      const { data } = await CategoryAPI.update(id, category);
      const newCategory = categories.map(value => value._id === id ? data : value)
      setProducts(newCategory)
    } catch (error) {
      console.log(error)
    }
  }
  const deleteCate = async (id) => {
    try {
      await CategoryAPI.remove(id);
      const newCategory = categories.filter(category => category._id !== id);
      setProducts(newCategory);
    } catch (error) {
      console.log(error)
    }

    // console.log(todos);
  }

  return (
    <div >

      <Routers products={products} onDelete={onHandleDelete} onAdd={onHandleAdd} onEdit={updateProduct} 
      categories={categories} onCateAdd={addCate} onCateEdit={updateCate} onCateDelete={deleteCate}/>

    </div>
  );
}


export default App;