import React from "react";
import MainLayout from "../../layouts/MainLayout";
import UserSearch from "../../components/UserSearch";
import '../../App.css'
import UsersBox from "../../components/UsersBox";

const Stock: React.FC = () => {
  return (
    <MainLayout
      title="Usuários"
      userName="Maria Pimenta"
      userEmail="maria.log@tecnotooling.com"
    >
      <div className="flex flex-col space-y-0">
        <div className="rounded-2xl shadow-md z-20">
          <UserSearch title="Usuário" />
        </div>
        <UsersBox />
      </div>
    </MainLayout>
  );
};

export default Stock;
