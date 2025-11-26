import React from "react";
import '../../App.css'
import RegisterForm from "../../components/RegisterForm";

const Register: React.FC = () => {
    return (
        <div className="w-full h-full flex items-center justify-center">
            <RegisterForm />
        </div>
    );
};

export default Register;