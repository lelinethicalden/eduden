/**
 * API client for the eduden LMS backend (Django REST Framework).
 */

const API_BASE_URL = process.env.NEXT_PUBLIC_LMS_API_URL || "https://lmsapi.eduden.io/api";

export type ApiError = {
  status: number;
  message: string;
  url: string;
};

interface RequestOptions extends RequestInit {
  token?: string;
}

class ApiClient {
  constructor(private baseUrl: string = API_BASE_URL) {}

  private async request<T>(endpoint: string, options: RequestOptions = {}): Promise<T> {
    const { token, ...fetchOptions } = options;

    const headers: Record<string, string> = {
      "Content-Type": "application/json",
      Accept: "application/json",
    };
    if (fetchOptions.headers) {
      new Headers(fetchOptions.headers).forEach((value, key) => {
        headers[key] = value;
      });
    }
    if (token) {
      headers["Authorization"] = `Token ${token}`;
    }

    const url = `${this.baseUrl}${endpoint}`;

    let response: Response;
    try {
      response = await fetch(url, { ...fetchOptions, headers });
    } catch (error) {
      const message = error instanceof Error ? error.message : "Network error";
      throw { status: 0, message, url } satisfies ApiError;
    }

    const text = await response.text();
    let data: unknown = null;
    if (text) {
      try {
        data = JSON.parse(text);
      } catch {
        data = null;
      }
    }

    if (!response.ok) {
      const body = (data ?? {}) as { detail?: string; message?: string };
      throw {
        status: response.status,
        message: body.detail || body.message || "Request failed",
        url,
      } satisfies ApiError;
    }

    return data as T;
  }

  get<T>(endpoint: string, token?: string): Promise<T> {
    return this.request<T>(endpoint, { method: "GET", token });
  }

  post<T>(endpoint: string, data: unknown, token?: string): Promise<T> {
    return this.request<T>(endpoint, {
      method: "POST",
      body: JSON.stringify(data),
      token,
    });
  }
}

export const apiClient = new ApiClient();
export default apiClient;
