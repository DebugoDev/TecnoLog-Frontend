import React, { createContext, useState, useEffect, useCallback } from "react";
import authService from "../services/authService";
import type { IUser } from "../services/userService";

interface IUserContext {
    user?: IUser;
    token: string;
    loading: boolean;
    login: (email: string, password: string) => Promise<void>;
    logout: () => void;
    isAuthenticated: boolean;
}

export const UserContext = createContext<IUserContext>({
    token: "",
    loading: true,
    login: async () => { },
    logout: () => { },
    isAuthenticated: false,
});

export const UserProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [user, setUser] = useState<IUser>();
    const [token, setToken] = useState("");

    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const storedToken = localStorage.getItem("token");
        const storedUser = localStorage.getItem("user");

        if (storedToken && storedUser) {
            setToken(storedToken);
            setUser(JSON.parse(storedUser));
        }

        setLoading(false);
    }, []);

    const login = useCallback(async (email: string, password: string) => {
        setLoading(true);
        try {
            const res = await authService.login({ email, password });
            const { token, user } = res;

            localStorage.setItem("token", token);
            localStorage.setItem("user", JSON.stringify(user));

            setToken(token);
            setUser(user);
        } finally {
            setLoading(false);
        }
    }, []);

    const logout = useCallback(() => {
        localStorage.removeItem("token");
        localStorage.removeItem("user");

        setToken("");
        setUser(undefined);
    }, []);

    return (
        <UserContext.Provider
            value={{
                user,
                token,
                loading,
                login,
                logout,
                isAuthenticated: !!token,
            }}
        >
            {children}
        </UserContext.Provider>
    );
};
