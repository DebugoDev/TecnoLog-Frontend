import React from "react";
import Sidebar from "../../components/Sidebar";
import Header from "../../components/Header";
import SearchBar from "../../components/SearchBar";
import "../../App.css"

const Stock: React.FC = () => {
  return (
    <div className="flex h-screen">
      <Sidebar />

      <div className="flex-1 flex flex-col">
        <Header
          title="Estoque"
          userName="Maria Pimenta"
          userEmail="maria.log@tecnotooling.com"
        />

        <main className="flex-1 p-6 overflow-auto">
        <SearchBar title="Produto"/>
        </main>
      </div>
    </div>
  );
};

export default Stock;