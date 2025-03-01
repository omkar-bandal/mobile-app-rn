export interface Client {
  get<T>(path: string): Promise<T>;
  post<T>(path: string, date: any): Promise<T>;
  put<T>(path: string, date: any): Promise<T>;
  patch<T>(path: string, date: any): Promise<T>;
  delete<T>(path: string): Promise<T>;
}
