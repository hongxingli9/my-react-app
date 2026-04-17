import { GLOBAL_CONFIG } from "@/global-config";
import { t } from "@/locales/i18n";
import axios, { type AxiosRequestConfig, type AxiosResponse, type AxiosError } from "axios";
import { toast } from "sonner";
import type { Result } from "@/types/api";
import { ResultStatus } from "@/types/enum";

const axiosInstance = axios.create({
  baseURL: GLOBAL_CONFIG.apiBaseUrl,
  timeout: 5000,
  headers: {
    "Content-Type": "application/json;charset=UTF-8",
  },
});

axiosInstance.interceptors.request.use(
  (config) => {
    config.headers.Authorization = "Bearer Token";
    return config;
  },
  (error) => {
    return Promise.reject(error);
  },
);

axiosInstance.interceptors.response.use(
  (res: AxiosResponse<Result<any>>) => {
    if (!res.data) throw new Error(t("sys.api.apiRequestFailed"));
    const { status, message, data } = res.data;
    if (status === ResultStatus.SUCCESS) {
      return data;
    }
    throw new Error(message || t("sys.api.apiRequestFailed"));
  },
  (error: AxiosError<Result>) => {
    const { response, message } = error || {};
    const errMsg = response?.data?.message || message || t("sys.api.errorMessage");
    toast.error(errMsg, { position: "top-center" });
    if (response?.status === 401) {
      // TODO: redirect to login page
    }
    return Promise.reject(error);
  },
);

class APIClient {
  request<T = unknown>(config: AxiosRequestConfig): Promise<T> {
    return axiosInstance.request<any, T>(config);
  }
  get<T = unknown>(config: AxiosRequestConfig): Promise<T> {
    return this.request<T>({ ...config, method: "GET" });
  }
  post<T = unknown>(config: AxiosRequestConfig): Promise<T> {
    return this.request<T>({ ...config, method: "POST" });
  }
  put<T = unknown>(config: AxiosRequestConfig): Promise<T> {
    return this.request<T>({ ...config, method: "PUT" });
  }
  delete<T = unknown>(config: AxiosRequestConfig): Promise<T> {
    return this.request<T>({ ...config, method: "DELETE" });
  }
}

export default new APIClient();
