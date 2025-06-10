import { useEffect, useState } from 'react';
import { DataResult, Order } from '../@types/index';
import axios from 'axios';
import { fullPath, getOrders } from '../utils/urls';


export const usePayOrder = (order?: Order) => {
   const [callPayOrder, setCallPayOrder] = useState(() => (order:Order) => {});
    const [data, setData] = useState<DataResult<Order>>({ data: {} as Order });
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.post(fullPath(getOrders), order);
                setData(response.data);
            } catch (err: any) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };
        setCallPayOrder(fetchData);
       // fetchData();
    }, [order]);

    return callPayOrder;
};


