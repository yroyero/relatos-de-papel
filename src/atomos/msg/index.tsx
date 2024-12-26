import React from 'react';
import { FaTrashAlt } from 'react-icons/fa';
import { useShop } from '../../context/ShopContext';
import './style.css';

interface NotificationProps {
    message: string;
    type: 'success' | 'error' | 'info';
    index: number;
}

const Notification: React.FC<NotificationProps> = ({ message, type, index }) => {

    const {removeNotification} = useShop();
 
    const handleDelete = () => {
       removeNotification(index);
    }

    return (
        <div className={`notification ${type}`}>
            {message}
            <FaTrashAlt size={20} onClick={handleDelete} color="#cccccc"/>
        </div>

    );
};

export default Notification;