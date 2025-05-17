import { API } from './../@types/index';
const API_URL = process.env.REACT_APP_API_URL;
const API_KEY = process.env.REACT_APP_API_KEY;

export { API_URL, API_KEY };

const getBooks = '/ms-books-catalogue/books';

export { getBooks };

const fullPath = (action:string) => `${API_URL}${action}`;

export { fullPath };


export interface HttpResponse<T> extends Response {
    parsedBody?: T;
    }
 
async function http<T>(request: RequestInfo): Promise<HttpResponse<T>> {
    const response: HttpResponse<T> = await fetch(request);
    const text = await response.text();
    try {
      // may error if there is no body
      response.parsedBody = JSON.parse(text);
    } catch (ex) {
      throw new Error(text);
    }
   
    if (!response.ok) {
      let errorMessage = response.statusText;
      if (!response.parsedBody) throw new Error(errorMessage);
      throw new Error(errorMessage);
    }
    return response;
  }
  
  const headers = () => {
    const aux = new Headers();
    aux.append('Content-Type', 'application/json');
    return aux;
  }

  export async function Post<T>(
    path: string,
    body: any,
    args: RequestInit = {
      method: 'post',
      body: JSON.stringify(body),
      headers: headers()
    }
  ): Promise<HttpResponse<T>> {
    const url = `${API_URL}${path}`;
    return await http<T>(new Request(url, args));
  }
   
 
   
   