import { useState } from "react";
import { Menu, ShoppingCart, Bell, Users, Package, Grid } from "lucide-react";
import WhiteLogo from '../assets/images/logo-branca.png'

export default function Sidebar() {
    const [open, setOpen] = useState(false);

    const menuItems = [
        { name: "Pedidos", icon: <ShoppingCart size={22} /> },
        { name: "Estoque", icon: <Grid size={22} /> },
        { name: "Notificações", icon: <Bell size={22} /> },
        { name: "Usuários", icon: <Users size={22} /> },
        { name: "Inbound e Outbound", icon: <Package size={22} /> },
    ];

    return (
        <div
            className={`h-screen bg-[#1f3449] text-white flex flex-col justify-between transition-all duration-100
        ${open ? "w-72" : "w-16"}`}
        >
            <div>
                <div className="flex items-center justify-between px-4 py-4 cursor-pointer" onClick={() => setOpen(!open)}>
                    <Menu size={26} />
                </div>

                <nav className="mt-4">
                    {menuItems.map((item, idx) => (
                        <div
                            key={idx}
                            className="flex items-center gap-3 px-4 py-3 hover:bg-[#22384d] cursor-pointer transition-colors"
                        >
                            {item.icon}
                            {open && <span className="text-base">{item.name}</span>}
                        </div>
                    ))}
                </nav>
            </div>

            <div className="p-4 flex items-center justify-center">
                {open && (
                    <div className="flex flex-col items-center">
                        <img src={WhiteLogo} />
                    </div>
                )}
            </div>
        </div>
    );
}
