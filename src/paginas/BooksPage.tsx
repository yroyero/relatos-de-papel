import React, { useEffect, useState } from "react";
import { useSearchBooks } from "../hooks/useProducts";
import { Product } from "../@types";
import FeaturedProducts from "../organismos/featuredProducts";
import "./bookStyle.css";

const Books: React.FC = () => {
  const [books, setBooks] = useState<Product[]>([]);
  const [search, setSearch] = useState("");
  const searchBooks = useSearchBooks(search);

  useEffect(() => {
    setBooks(searchBooks);
  }, [searchBooks]);

  return (
    <div className="featured-products">
      <div className="featured-products__filters">
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
