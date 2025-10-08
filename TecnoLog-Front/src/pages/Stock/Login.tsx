import React from "react";
import '../../App.css'
import LoginForm from "../../components/LoginForm";

const Login: React.FC = () => {
  return (
    <div className="w-full h-full flex items-center justify-center">
        <LoginForm />
    </div>
  );
};

export default Login;