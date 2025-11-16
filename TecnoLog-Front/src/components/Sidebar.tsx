import { useState } from "react";
import { Menu, ShoppingCart, Bell, Users, Package, Grid } from "lucide-react";
import WhiteLogo from "../assets/images/logo-branca.png";
import NotificationModal from "./NotificationModal"; // <--- import aqui

export default function Sidebar() {

    const notifications = [
        {
            id: 1,
            text: "Separe os Materiais do Pedido 19280",
            status: "new",
        },
        {
            id: 2,
            text: "Separe os Materiais do Pedido 19280",
            status: "read",
        },
        {
            id: 3,
            text: "Separe os Materiais do Pedido 19280",
            status: "new",
        },
        {
            id: 4,
            text: "Separe os Materiais do Pedido 19345",
            status: "new",
        },
        {
            id: 5,
            text: "Separe os Materiais do Pedido 19280",
            status: "read",
        },
        {
            id: 6,
            text: "Separe os Materiais do Pedido 19280",
            status: "new",
        },
    ];

    const [open, setOpen] = useState(false);
    const [showNotifications, setShowNotifications] = useState(false);

    const menuItems = [
        { name: "Requisições de Produção", icon: <ShoppingCart size={22} />, link: "/production" },
        { name: "Estoque", icon: <Grid size={22} />, link: "/" },
        { name: "Notificações", icon: <Bell size={22} />, action: () => setShowNotifications(!showNotifications) },
        { name: "Usuários", icon: <Users size={22} />, link: "/users" },
        { name: "Entrada e Saída", icon: <Package size={22} />, link: "/movs" },
    ];

    return (
        <div
            className={`fixed top-0 left-0 h-screen bg-[#1f3449] text-white flex flex-col justify-between
      transition-all duration-300 ease-in-out z-50
      ${open ? "w-72" : "w-16"}`}
        >
            <div className="relative">
                <div
                    className="flex items-center justify-between px-4 py-4 cursor-pointer"
                    onClick={() => setOpen(!open)}
                >
                    <Menu size={26} />
                </div>
                <nav className="mt-4 flex flex-col">
                    {menuItems.map((item, idx) => (
                        <div
                            key={idx}
                            className="flex items-center gap-3 px-4 py-3 hover:bg-[#22384d] cursor-pointer transition-colors relative"
                            onClick={() => item.action ? item.action() : window.location.assign(item.link!)}
                        >
                            {item.icon}
                            {open && <span className="text-base">{item.name}</span>}

                            {item.name === "Notificações" && showNotifications && (
                                <div className="absolute left-16 top-0">
                                    <NotificationModal isOpen={showNotifications} onClose={() => setShowNotifications(false)} notifications={notifications} />
                                </div>
                            )}
                        </div>
                    ))}
                </nav>
            </div>
            <div className="p-4 flex items-center justify-center">
                {open && (
                    <div className="flex flex-col items-center">
                        <img src={WhiteLogo} alt="Logo" className="w-full" />
                    </div>
                )}
            </div>
        </div>
    );
}
