import React from "react";
import MainLayout from "../../layouts/MainLayout";
import SearchBar from "../../components/SearchBar";
import '../../App.css'
import ValuesBar from "../../components/ValuesBar";
import Table from "../../components/Table";

const Stock: React.FC = () => {
  return (
    <MainLayout
      title="Estoque"
      userName="Maria Pimenta"
      userEmail="maria.log@tecnotooling.com"
    >
      <div className="flex flex-col space-y-0">
        <div className="rounded-2xl shadow-md z-20">
          <SearchBar title="Produto" />
        </div>
        <div className="rounded-2xl shadow-md -mt-4">
          <ValuesBar stockValue="112.290,00" stockReal="1281" lowStock="3" zeroStock="2"/>
        </div>
      </div>

      <div>
        <Table />
      </div>
    </MainLayout>
  );
};

export default Stock;
