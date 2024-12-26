import React from 'react';
import './App.css';
import {Home} from './paginas/HomePage';
import { ShopProvider } from './context/ShopContext';
import Layout from './templates/Layout';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Landing from './paginas/LandingPage';
import Books from './paginas/BooksPage';
import BookDetail from './paginas/BookDetailPage';
import ShopPage from './paginas/ShopPage';
import ContactPage from './paginas/ContactPage';
import NotFound from './paginas/NotFound';

function App() {
  return (
    <ShopProvider >      
        <BrowserRouter>
        <Routes>
          <Route path="/" element={<Landing/>}/>
          <Route path="/home" element={<Layout><Home/></Layout>}/>
          <Route path="/books" element={<Layout><Books/></Layout>} />
          <Route path="/detail/:idBook" element={<Layout><BookDetail/></Layout>} />
          <Route path="/payment" element={<Layout><ShopPage/></Layout>} />
          <Route path="/contact" element={<Layout><ContactPage/></Layout>} />
          <Route path="*" element={<NotFound/>} />
        </Routes>
        </BrowserRouter>
    </ShopProvider>   
  );
}

export default App;
