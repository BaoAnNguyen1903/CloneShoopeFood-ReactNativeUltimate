export {};

declare global {
  interface IBackendRes<T> {
    error?: string | string[];
    message: string;
    statusCode: number | string;
    data?: T; // data chỉ có khi thành công
  }

  interface IRegister {
    _id: string;
  }
}
