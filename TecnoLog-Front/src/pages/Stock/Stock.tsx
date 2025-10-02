import React from "react";
import Sidebar from "../../components/Sidebar";
import Header from "../../components/Header";
import Input from "../../components/Input";
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
                <Input
                    placeholder="Item"
                />
        </main>
      </div>
    </div>
  );
};

export default Stock;