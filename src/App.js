import React, { useState } from "react";
import Header from "./Header";
import AccordionMenu from "./AccordionMenu";
import Catalog from "./Catalog";
import OrderModal from "./OrderModal";
import RodentDetails from "./RodentDetails";
import { rodents } from "./data";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const App = () => {
  const [search, setSearch] = useState("");
  const [filteredRodents, setFilteredRodents] = useState(rodents);
  const [selectedCategory, setSelectedCategory] = useState("");
  const [sortOrder, setSortOrder] = useState("");
  const [selectedRodent, setSelectedRodent] = useState(null);
  const [orderModalOpen, setOrderModalOpen] = useState(false);
  const [orderRodent, setOrderRodent] = useState(null);

  const handleSearch = (query) => {
    setSearch(query);
    filterRodents(query, selectedCategory, sortOrder);
  };

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
    filterRodents(search, category, sortOrder);
  };

  const handleSort = (order) => {
    setSortOrder(order);
    filterRodents(search, selectedCategory, order);
  };

  const filterRodents = (searchQuery, category, order) => {
    let filtered = rodents.filter((item) =>
      item.name.toLowerCase().includes(searchQuery.toLowerCase())
    );

    if (category) {
      filtered = filtered.filter((item) => item.category === category);
    }

    if (order === "asc") {
      filtered.sort((a, b) => a.price - b.price);
    } else if (order === "desc") {
      filtered.sort((a, b) => b.price - a.price);
    }

    setFilteredRodents(filtered);
  };

  const handleDetailsClick = (id) => {
    const rodent = rodents.find((item) => item.id === id);
    setSelectedRodent(rodent);
  };

  const handleOrderClick = (rodent) => {
    setOrderRodent(rodent);
    setOrderModalOpen(true);
  };

  const handleOrderModalClose = () => {
    setOrderModalOpen(false);
    setOrderRodent(null);
  };

  return (
    <Router>
      <div>
        <Header onSearch={handleSearch} />
        <AccordionMenu onCategoryChange={handleCategoryChange} />
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            margin: "20px 0",
          }}
        >
          <button onClick={() => handleSort("asc")}>
            Сортировать по возрастанию цены
          </button>
          <button onClick={() => handleSort("desc")}>
            Сортировать по убыванию цены
          </button>
        </div>
        <Routes>
          <Route
            path="/"
            element={
              <Catalog
                rodents={filteredRodents}
                onDetailsClick={handleDetailsClick}
                onOrderClick={handleOrderClick}
              />
            }
          />
          <Route
            path="/details"
            element={<RodentDetails rodent={selectedRodent} />}
          />
        </Routes>
        {orderRodent && (
          <OrderModal
            open={orderModalOpen}
            onClose={handleOrderModalClose}
            rodent={orderRodent}
          />
        )}
      </div>
    </Router>
  );
};

export default App;
