// import React, { createContext, useContext, useEffect, useState } from "react";
// import { authService } from "../services/authService";

// interface User {
//     id: number
//     code: number
//     name: string
//     email: string
//     role: string
// }

// interface UserContextType {
//     user: User | null;
//     token: string | null;
//     loading: boolean;
//     login: (username: string, password: string) => Promise<void>;
//     logout: () => void;
//     isAuthenticated: boolean;
// }

// const UserContext = createContext<UserContextType | undefined>(undefined);

// export const UserProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
//     const [user, setUser] = useState<User | null>(null);
//     const [token, setToken] = useState<string | null>(null);
//     const [loading, setLoading] = useState(true);

//     useEffect(() => {
//         const savedToken = localStorage.getItem("token");
//         const savedUser = localStorage.getItem("user");

//         if (savedToken && savedUser) {
//             setToken(savedToken);
//             setUser(JSON.parse(savedUser));
//         }

//         setLoading(false);
//     }, []);

//     const login = async (email: string, password: string) => {
//         setLoading(true);
//         try {
//             const res = await authService.login({ email, password }) as { token: string, user: User };
//             setUser(res.user);
//             setToken(res.token);

//             localStorage.setItem("token", res.token);
//             localStorage.setItem("user", JSON.stringify(res.user));
//         } catch (err: any) {
//             throw new Error(err.message || "Login failed");
//         } finally {
//             setLoading(false);
//         }
//     };

//     const logout = () => {
//         setUser(null);
//         setToken(null);
//         localStorage.removeItem("token");
//         localStorage.removeItem("user");
//     };

//     const value: UserContextType = {
//         user,
//         token,
//         loading,
//         login,
//         logout,
//         isAuthenticated: !!user && !!token,
//     };

//     return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
// };

// export const useUser = () => {
//     const context = useContext(UserContext);
//     if (!context) throw new Error("useUser must be used within a UserProvider");
//     return context;
// };
