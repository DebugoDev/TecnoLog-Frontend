import React from "react";
import { Package } from "lucide-react";

interface Notification {
    id: number;
    text: string;
    status?: string;
}

interface NotificationModalProps {
    isOpen: boolean;
    onClose: () => void;
    notifications: Notification[];
}

const NotificationModal: React.FC<NotificationModalProps> = ({
    isOpen,
    onClose,
    notifications,
}) => {
    if (!isOpen) return null;
    return (
            <div
                className="absolute top-0 ml-3 w-80 bg-white shadow-xl rounded-xl p-3 border border-gray-100 z-50"
                onMouseLeave={onClose}
            >
                <div className="absolute left-[-8px] top-6 w-0 h-0 border-t-8 border-t-transparent border-b-10 border-b-transparent border-r-8 border-r-white"></div>
                <div className="flex flex-col gap-2">
                    {notifications.length > 0 ? (
                        notifications.map((notif) => {
                            const match = notif.text.match(/(\d+)$/);
                            const numeroPedido = match ? match[0] : "";
                            return (
                                <div
                                    key={notif.id}
                                    className="flex items-center gap-3 p-2 hover:bg-gray-50 rounded-lg cursor-pointer transition-all"
                                >
                                    <div className="w-12 h-12 rounded-full bg-[#1f3449] flex items-center justify-center text-white shadow-md">
                                        <Package size={18} />
                                    </div>
                                    <div className="flex-1 text-sm text-gray-700">
                                        {notif.text.replace(numeroPedido, "")}
                                        <span className="font-semibold text-gray-900">
                                            {numeroPedido}
                                        </span>
                                    </div>
                                    <span
                                        className={`w-2 h-2 rounded-full ${notif.status === "read" ? "bg-gray-300" : "bg-green-500"
                                            }`}
                                    ></span>
                                </div>
                            );
                        })
                    ) : (
                        <p className="text-center text-sm text-gray-500 py-4">
                            Nenhuma notificação
                        </p>
                    )}
                </div>
            </div>
    );
};

export default NotificationModal;