const BASE_URL = import.meta.env.VITE_API_URL;

export interface IPagination {
    page: number;
    pageSize: number;
    totalPages: number;
    totalItems: number;
    hasPreviousPage: boolean;
    hasNextPage: boolean;
}

interface RequestOptions extends RequestInit {
    isFormData?: boolean;
}

async function request(endpoint: string, options: RequestOptions = {}) {
    const token = localStorage.getItem("token");

    const headers: HeadersInit = options.isFormData
        ? {
            "Accept-Language": "pt-BR",
            ...(token && { Authorization: `Bearer ${token}` }),
            ...options.headers,
        }
        : {
            "Content-Type": "application/json",
            "Accept-Language": "pt-BR",
            ...(token && { Authorization: `Bearer ${token}` }),
            ...options.headers,
        };

    const response = await fetch(`${BASE_URL}${endpoint}`, { ...options, headers });
    const data = await response.json();

    if (!response.ok) {
        throw { status: response.status, ...data };
    }

    return data;
}

const api = {
    get: (endpoint: string) => request(endpoint),
    post: (endpoint: string, body?: any, options?: RequestOptions) =>
        request(endpoint, {
            method: "POST",
            body: options?.isFormData ? body : JSON.stringify(body),
            ...options,
        }),
    put: (endpoint: string, body?: any) => request(endpoint, { method: "PUT", body: JSON.stringify(body) }),
    patch: (endpoint: string, body?: any) => request(endpoint, { method: "PATCH", body: JSON.stringify(body) }),
    delete: (endpoint: string) => request(endpoint, { method: "DELETE" }),
};

export default api;
