const BASE_URL = import.meta.env.VITE_API_URL;

export interface IPagination {
    page: number
    pageSize: number
    totalPages: number
    totalItems: number
    hasPreviousPage: boolean
    hasNextPage: boolean
}

export interface IObjectNameResponse {
    id: string
    createdAt: Date
    name: string
}

export interface ICreateObjectName {
    name: string
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
    let data;

    try {
        data = await response.json();
    } catch {
        if (!response.ok) throw { status: 500, message: "Erro desconhecido" };
    }

    if (!response.ok) {
        throw { status: response.status, ...data };
    }

    return data;
}

async function downloadCsv(endpoint: string) {
    const token = localStorage.getItem("token");

    const response = await fetch(`${BASE_URL}${endpoint}`, {
        method: 'GET',
        headers: {
            "Accept-Language": "pt-BR",
            ...(token && { Authorization: `Bearer ${token}` }),
        }
    });

    if (!response.ok) {
        try {
            const error = await response.json();
            throw { status: response.status, ...error };
        } catch {
            throw { status: response.status, message: "Erro ao exportar CSV" };
        }
    }

    const blob = await response.blob();

    const contentDisposition = response.headers.get('content-disposition');
    const filename = contentDisposition?.match(/filename[^;=\n]*=((['"]).*?\2|[^;\n]*)/)?.[1]?.replace(/['"]/g, '') || `export-${Date.now()}.csv`;

    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = filename;
    document.body.appendChild(a);
    a.click();
    window.URL.revokeObjectURL(url);
    document.body.removeChild(a);
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
    downloadCsv: downloadCsv,
};

export default api; 