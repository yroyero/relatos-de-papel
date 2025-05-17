import { useCallback, useRef, useState } from 'react';
import { API, APIRequest, IResult } from '../@types';
import { Post } from '../utils/urls';
 
export const useTxCallback = <T>(url: string) => {
 
  const txUrl = useRef<string>(url);
 
  const [tx, setTx] = useState<IResult<T>>({
    loading: false
  });
 
  const callTx = useCallback((data: APIRequest<any>) => {
    (async function () {
      try {       
        setTx({ loading: true });
        const response = data.isFormData
          ? await Post<API<T>>(txUrl.current, null, {
              method: 'post',
              body: data.targetMethod === 'POST' ? data.body : data.queryParams,
            })
          : await Post<API<T>>(txUrl.current, data);       
 
        const responseData = response.parsedBody as API<T>;        
        
        const result = responseData.data; 
        if (!result) {
          throw new Error(responseData.message);
        }
 
        setTx({ loading: false, result: result });
      } catch (err) {
        let errorMSG = 'Ha ocurrido un error ejecutando la transacción';
        if (err) {
          if (typeof err === 'string') {
            errorMSG = err;
          } else if (typeof err === 'object') {
            const objMessage = err as { message?: string };
            errorMSG = objMessage.message ? objMessage.message : err.toString();
          }
        }
        setTx({ loading: false, error: errorMSG });
      }
    })();
  }, []);
 
  return {
    result: tx.result,
    error: tx.error,
    loading: tx.loading,
    callTx,
  };
};
 
 