import { useEffect, useRef, useState } from 'react';
import { API, APIRequest, IResult } from '../@types';
import { Post } from '../utils/urls';
 
export interface ITransaction<T> {
  result?: T;
  error?: string;
  loading: boolean;
}
 
export const useTx = <T>(
  url: string,
  data: APIRequest<any> | undefined,
  skipFirst = false
) => {
  const isFirstRun = useRef(skipFirst);
  const [transaction, setTransaction] = useState<IResult<T>>({
    loading: false,
  });
 
  useEffect(() => {
    if (isFirstRun.current) {
      isFirstRun.current = false;
      return;
    }
    if (data === undefined) {
      return;
    }
    (async function () {
      try {
        setTransaction({ loading: true });
        const response = data.isFormData
          ? await Post<API<T>>(url, null, {
              method: 'post',
              body: data.targetMethod === 'POST' ? data.body : data.queryParams,
            })
          : await Post<API<T>>(url, data); 
       
        const responseData = response.parsedBody as API<T>;

        const result = responseData.data;
 
        if (!result) {
          throw new Error(responseData.message);
        }
 
        setTransaction({ loading: false, result: result });
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
        setTransaction({ loading: false, error: errorMSG });
      }
    })();
    return () => {
      setTransaction({
        loading: false,
      });
    };
  }, [data]);
 
  return {
    result: transaction.result,
    error: transaction.error,
    loading: transaction.loading,
  };
};