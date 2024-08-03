import React from 'react';
import ProductList from './Components/ProductList ';
import Header from './Components/Header';
import './App.css'
import CustomItemContext from './context/itemContext';

const App = () => {
    return (
        <CustomItemContext>
            <Header />
            <ProductList />
        </CustomItemContext>
    );
};

export default App;