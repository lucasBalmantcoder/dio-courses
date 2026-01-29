import { HttpResponse } from "../models/http-responde-model";
export const ok = async (data: any): Promise<HttpResponse> => {
   return {
       statusCode: 200,
       body: data
   } 
    
};

export const noContent = async (): Promise<HttpResponse> => {
  return {
    statusCode: 204,
    body: null,
  };
};

export const badRequest = async (): Promise<HttpResponse> => {
  return {
    statusCode: 400,
    body: null,
  };
};