import type { RequestOptions } from "@/common/types/request-options.type";
import { API_URL } from "@/config";
import { QueryClient } from "@tanstack/react-query";

async function request<T>(url: string, options: RequestOptions = {}): Promise<T> {
  const { method = 'GET', body, headers = {} } = options;

  const config: RequestInit = {
    method,
    headers: {
      'Content-Type': 'application/json',
      ...headers,
    },
  };

  if (body) {
    config.body = JSON.stringify(body);
  }

  try {
    const response = await fetch(`${API_URL}${url}`, config);

    if (!response.ok) {
      const error = await response.json().catch(() => ({ message: response.statusText }));
      const message = Array.isArray(error.message)
        ? error.message.join(', ')
        : error.message;
      throw new Error(message || `HTTP error! status: ${response.status}`);
    }

    return response.json();
  } catch (error) {
    if (error instanceof TypeError) {
      throw new Error('Network error: Please check your internet connection');
    }
    throw error;
  }
}

export const apiClient = {
  get: <T>(url: string) => request<T>(url, { method: 'GET' }),
  post: <T>(url: string, data: unknown) => request<T>(url, { method: 'POST', body: data }),
  patch: <T>(url: string, data: unknown) => request<T>(url, { method: 'PATCH', body: data }),
  delete: <T>(url: string) => request<T>(url, { method: 'DELETE' }),
};

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      retry: 1,
      staleTime: 1000 * 60 * 5, 
      gcTime: 1000 * 60 * 10, 
    },
    mutations: {
      retry: 1,
    },
  },
})

