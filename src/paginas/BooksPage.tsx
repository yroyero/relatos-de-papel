import React, { useEffect, useState } from "react";
import { useFeaturedBooks, useFetchBooks, useSearchBooks } from "../hooks/useProducts";
import { Product } from "../@types";
import FeaturedProducts from "../organismos/featuredProducts";
import "./bookStyle.css";
import { getBooks } from "../utils/urls";

const Books: React.FC = () => {
  const [books, setBooks] = useState<Product[]>([]);
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState(getBooks);
  const searchBooks = useSearchBooks(search);
  const {data, loading, error} = useFetchBooks(filter);
  const {result, callTx} = useFeaturedBooks();

  useEffect(() => {    
    console.log("Books data:", data);
    setBooks(data.data);  
  },[data]);

  useEffect(() => {
    if (search) {
      setBooks(searchBooks.data);
    } else {
      setBooks(data.data);
    }
  }, [search, searchBooks, data]);

  useEffect(() => {

   setBooks(result ? result.books : []);
  }, [result]);

 

  return (
    <div className="featured-products">
      <div className="featured-products-filters">
        <label htmlFor="search">Buscar por: </label>
        <input
          type="text"
          id="search"
          onChange={(e) => setSearch(e.target.value)}
          placeholder="título, autor, género o palabras claves"
        />
      </div>
      <FeaturedProducts books={books} />
    </div>
  );
};

export default Books;
